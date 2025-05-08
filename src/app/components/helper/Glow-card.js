'use client';
import { useEffect, useRef, useState } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure code runs only on client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const CONTAINER = containerRef.current;
    const CARD = cardRef.current;

    if (!CONTAINER || !CARD) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      const CARD_BOUNDS = CARD.getBoundingClientRect();

      const isActive =
        event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event?.x < CARD_BOUNDS.right + CONFIG.proximity &&
        event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event?.y < CARD_BOUNDS.bottom + CONFIG.proximity;

      CARD.style.setProperty('--active', isActive ? 1 : CONFIG.opacity);

      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width / 2,
        CARD_BOUNDS.top + CARD_BOUNDS.height / 2,
      ];

      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;

      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      CARD.style.setProperty('--start', ANGLE + 90);
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty('flex-direction', CONFIG.vertical ? 'column' : 'row');
    };

    RESTYLE();
    document.body.addEventListener('pointermove', UPDATE, { passive: true });

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [isClient]);

  return (
    <div ref={containerRef} className={`glow-container glow-container-${identifier}`}>
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;

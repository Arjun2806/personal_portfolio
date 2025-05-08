'use client';
import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (!container || !card) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const updateGlow = (event) => {
      const bounds = card.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const isNear =
        event.clientX > bounds.left - CONFIG.proximity &&
        event.clientX < bounds.right + CONFIG.proximity &&
        event.clientY > bounds.top - CONFIG.proximity &&
        event.clientY < bounds.bottom + CONFIG.proximity;

      card.style.setProperty('--active', isNear ? 1 : CONFIG.opacity);

      const angle =
        (Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) /
        Math.PI;

      card.style.setProperty('--start', `${(angle < 0 ? angle + 360 : angle) + 90}`);
    };

    const applyStyles = () => {
      container.style.setProperty('--gap', CONFIG.gap);
      container.style.setProperty('--blur', CONFIG.blur);
      container.style.setProperty('--spread', CONFIG.spread);
      container.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    window.addEventListener('pointermove', updateGlow, { passive: true });
    applyStyles();
    updateGlow({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

    return () => {
      window.removeEventListener('pointermove', updateGlow);
    };
  }, []);

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

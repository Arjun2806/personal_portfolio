"use client";

import { useEffect, useRef } from "react";

// GlowCard component that creates a glowing card effect based on pointer movement.
// This component uses `useRef` to reference the container and card DOM elements.
// An `useEffect` hook is used to manage event listeners and dynamically update
// styles based on pointer movements. The glow effect is achieved by updating 
// CSS custom properties for active state and angle of the gradient.
const GlowCard = ({ children, identifier }) => {
	const containerRef = useRef(null);
	const cardRef = useRef(null);

	useEffect(() => {
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
			const bounds = CARD.getBoundingClientRect();
			const centerX = bounds.left + bounds.width / 2;
			const centerY = bounds.top + bounds.height / 2;

			let active =
				event.clientX > bounds.left - CONFIG.proximity &&
				event.clientX < bounds.right + CONFIG.proximity &&
				event.clientY > bounds.top - CONFIG.proximity &&
				event.clientY < bounds.bottom + CONFIG.proximity;

			CARD.style.setProperty("--active", active ? 1 : CONFIG.opacity);

			let angle =
				(Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) /
				Math.PI;
			angle = angle < 0 ? angle + 360 : angle;

			CARD.style.setProperty("--start", angle + 90);
		};

		const RESTYLE = () => {
			CONTAINER.style.setProperty("--gap", CONFIG.gap);
			CONTAINER.style.setProperty("--blur", CONFIG.blur);
			CONTAINER.style.setProperty("--spread", CONFIG.spread);
			CONTAINER.style.setProperty(
				"--direction",
				CONFIG.vertical ? "column" : "row"
			);
		};

		document.body.addEventListener("pointermove", UPDATE, { passive: true });
		RESTYLE();

		return () => {
			document.body.removeEventListener("pointermove", UPDATE);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`glow-container glow-container-${identifier}`}
		>
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

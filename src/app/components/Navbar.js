'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleHashChange = () => {
			setActiveSection(window.location.hash);
		};

		handleHashChange(); // initial
		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	// Shared nav links
	const navLinks = [
		{ href: '/#about', label: 'ABOUT' },
		{ href: '/#experience', label: 'EXPERIENCE' },
		{ href: '/#skills', label: 'SKILLS' },
		{ href: '/#education', label: 'EDUCATION' },
		{ href: '/#projects', label: 'PROJECTS' },
	];

	const linkClass = (href) =>
		`block px-4 py-2 text-sm transition-colors duration-300 ${activeSection === href.replace('/', '') ? 'text-pink-600' : 'text-white hover:text-pink-600'
		}`;

	return (
		<nav className="bg-transparent px-4 relative z-50">
			<div className="flex items-center justify-between py-5">
				<div className="flex flex-shrink-0 items-center">
					<Link href="/" className="text-[#16f2b3] text-3xl font-bold">
						ARJUN SUTHAR
					</Link>
				</div>

				{/* Hamburger Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-white focus:outline-none">
						<FiMenu size={24} />
					</button>
				</div>

				{/* Desktop Nav Links */}
				<ul className="hidden md:flex md:space-x-4">
					{navLinks.map(({ href, label }) => (
						<li key={href}>
							<Link href={href} className={linkClass(href)}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Mobile Slide-In Panel */}
			<div
				className={`fixed top-0 right-0 z-40 h-screen w-[300px] bg-[#0d1224]/80 backdrop-blur-md p-4 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
					} md:hidden`}
			>
				{/* Close Icon */}
				<div className="flex justify-end mb-6">
					<button onClick={toggleMenu} className="text-white">
						<FiX size={24} />
					</button>
				</div>

				{/* Mobile Nav Links */}
				<ul className="flex flex-col space-y-4">
					{navLinks.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className={linkClass(href)}
								onClick={() => setIsOpen(false)}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

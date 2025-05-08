'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './helper/Scroll-to-top';

export default function ClientLayout({ children }) {
	return (
		<>
			<main className="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
				<Navbar />
				{children}
				<ScrollToTop />
			</main>
			<Footer />
		</>
	);
}

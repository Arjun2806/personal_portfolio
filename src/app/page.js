import AboutSection from "./components/home/about";
import ClientSection from "./components/home/ClientSection";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero-section";

export default function Home() {
	return (
		<div suppressHydrationWarning >
			<HeroSection />
			<AboutSection />
			<ClientSection />
			<Contact />
		</div>
	);
}

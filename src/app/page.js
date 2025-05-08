import AboutSection from "./components/home/about";
import ClientSections from "./components/home/ClientSections";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero-section";


export default function Home() {
	return (
		<div suppressHydrationWarning >
			<HeroSection />
			<AboutSection />
			<ClientSections />
			<Contact />
		</div>
	);
}

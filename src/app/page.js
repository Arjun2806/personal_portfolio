import AboutSection from "./components/home/about";
import ClientSections from "./components/home/ClientSections";
import HeroSection from "./components/home/hero-section";
import Projects from "./components/home/projects";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<Projects />
			<ClientSections/>
		</div>
	);
}

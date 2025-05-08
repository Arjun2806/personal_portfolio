import AboutSection from "./components/home/about";
import Contact from "./components/home/contact";
import Education from "./components/home/education";
import Experience from "./components/home/experience";
import HeroSection from "./components/home/hero-section";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

export default function Home() {
	return (
		<div suppressHydrationWarning >
			<HeroSection />
			<AboutSection />
			{/* <Experience /> */}
			<Skills />
			<Projects />
			{/* <Education /> */}
			<Contact />
		</div>
	);
}

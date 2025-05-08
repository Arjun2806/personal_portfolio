import dynamic from "next/dynamic";

import AboutSection from "./components/home/about";
import HeroSection from "./components/home/hero-section";
import Projects from "./components/home/projects";

const Experience = dynamic(() => import("./components/home/experience"), { ssr: false });
const Education = dynamic(() => import("./components/home/education"), { ssr: false });
const Contact = dynamic(() => import("./components/home/contact"), { ssr: false });
const Skills = dynamic(() => import("./components/home/skills"), { ssr: false });


export default function Home() {
	return (
		<div suppressHydrationWarning >
			<HeroSection />
			<AboutSection />
			<Experience />
			<Skills />
			<Projects />
			<Education />
			<Contact />
		</div>
	);
}

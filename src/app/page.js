import dynamic from "next/dynamic";

import AboutSection from "./components/home/about";
import HeroSection from "./components/home/hero-section";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

const Experience = dynamic(() => import("./components/home/experience"), { ssr: false });
const Education = dynamic(() => import("./components/home/education"), { ssr: false });
const Contact = dynamic(() => import("./components/home/contact"), { ssr: false });

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

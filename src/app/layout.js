import { Inter } from "next/font/google";
import "./css/globals.css";
import './css/card.css';
import './css/loader.css';
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/helper/Scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio of Arjun Suthar - Software Developer",
	description:
		"This is the portfolio of Arjun Suthar Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer />
				<main className="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
					<Navbar />
					{children}
					<ScrollToTop />
				</main>
				<Footer />
			</body>
		</html>
	);
}

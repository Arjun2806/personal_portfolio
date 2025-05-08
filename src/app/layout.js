import { Inter } from "next/font/google";
import "./css/globals.css";
import './css/card.css';
import './css/loader.css';
import { ToastContainer } from "react-toastify";
import ClientLayout from "./components/ClientLayout";

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
				<ClientLayout />
			</body>
		</html>
	);
}

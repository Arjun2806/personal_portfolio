import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import javascript from '../assets/svg/javascript.svg';
import typescript from '../assets/svg/typescript.svg';
import react from '../assets/svg/react.svg';
import nextjs from '../assets/svg/nextJS.svg';
import tailwind from '../assets/svg/tailwind.svg';
import mongodb from '../assets/svg/mongoDB.svg';
import mysql from '../assets/svg/mysql.svg';
import git from '../assets/svg/git.svg';
import bootstrap from '../assets/svg/bootstrap.svg';
import docker from '../assets/svg/docker.svg';
import firebase from '../assets/svg/firebase.svg';
import framer from '../assets/svg/framer.svg';
import node from '../assets/svg/nodejs.svg';
import express from '../assets/svg/express.svg';
import python from '../assets/svg/python.svg';

export const personalData = {
	name: "ARJUN SUTHAR",
	profile: '/Profile.jpg',
	designation: "Software Developer",
	description: "My name is ARJUN SUTHAR. I am a dedicated and passionate web developer with a strong enthusiasm for building dynamic, user-focused applications. With a keen eye for detail and a constant drive to improve, I love exploring new technologies and enhancing the user experience through smooth and responsive interfaces. My core expertise lies in React and modern JavaScript frameworks, and I enjoy bringing ideas to life through clean, efficient code. I’m always open to new challenges and opportunities that align with my technical skills and creativity.",
	email: 'arjunsuthar3427@gmail.com',
	phone: '+91 9662843427',
	address: 'Vadodara - 390021, Gujarat, India',
	github: 'https://github.com/Arjun2806',
	linkedIn: 'https://www.linkedin.com/in/arjun-suthar/',
	resume: "https://drive.google.com/file/d/190U4i8PxivlF_0Rxbgi9kmrzGeKksDyC/view?usp=sharing"
}

export const experiences = [
	{
		id: 1,
		title: "Full Stack Developer",
		company: "Tech23",
		duration: "(July 2023 - Present)",
	},
	{
		id: 2,
		title: "Trainee Software Engineer (Intern)",
		company: "Tech23",
		duration: "(May 2023 - June 2023)",
	}
];

export const skillsData = [
	'HTML',
	'CSS',
	'Javascript',
	'Typescript',
	'React',
	'Next JS',
	'Tailwind',
	'MongoDB',
	'MySQL',
	'Git',
	'Bootstrap',
	'Docker',
	'Firebase',
	'Framer Motion',
	'Node JS',
	'Express JS',
	'Python',
]

export const skillsImage = (skill) => {
	const skillID = skill.toLowerCase();
	switch (skillID) {
		case 'html':
			return html;
		case 'css':
			return css;
		case 'javascript':
			return javascript;
		case 'typescript':
			return typescript;
		case 'react':
			return react;
		case 'next js':
			return nextjs;
		case 'tailwind':
			return tailwind;
		case 'mongodb':
			return mongodb;
		case 'mysql':
			return mysql;
		case 'git':
			return git;
		case 'bootstrap':
			return bootstrap;
		case 'docker':
			return docker;
		case 'firebase':
			return firebase;
		case 'framer motion':
			return framer;
		case 'node js':
			return node;
		case 'express js':
			return express;
		case 'python':
			return python;
		default:
			break;
	}
}

export const projectsData = [
	{
		id: 1,
		name: 'Yummly ',
		description: 'Created a dynamic food ordering application using React, featuring global state management with Context API and secure navigation with protected routes. Users can browse menus, add items to cart, and place orders seamlessly in a responsive UI.',
		tools: ['React.js', 'Context API', 'React Router', 'Protected Routes', 'Responsive UI'],
		role: 'Frontend Developer',
	},
	{
		id: 2,
		name: 'Quick Buy ',
		description: 'Built an e-commerce platform featuring product browsing, cart management, and secure checkout functionalities.',
		tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack'],
		role: 'Full Stack Developer',
	},
	{
		id: 3,
		name: 'AAYOJAN ',
		description: 'Developed a user-friendly event management application enabling users to create events, add and manage participants, and monitor everything from a centralized dashboard. The app streamlines event organization through intuitive interfaces and real-time updates.',
		tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Dashboard UI'],
		role: 'Full Stack Developer',
	},
	{
		id: 4,
		name: 'Uttarayan Art ',
		description: 'Built a modern and responsive web application using Next.js to showcase the foundation’s artwork, exhibitions, and workshops. Designed as an informative platform to highlight artistic initiatives, upcoming events, and promote cultural engagement.',
		tools: ['Next.js', 'Tailwind CSS', 'Static Pages', 'Responsive Design'],
		role: 'Frontend Developer',
	},
	{
		id: 5,
		name: 'CRM Web App ',
		description: 'Developed a modern Customer Relationship Management (CRM) system using the MERN stack, enabling efficient lead tracking, contact management, and pipeline visualization. Designed for scalability and ease of use to streamline business operations and client engagement.',
		tools: ['MongoDB', 'Express.js', 'Auth0', 'React.js', 'Node.js', 'Redux', 'Tailwind CSS'],
		role: 'Full Stack Developer',
	}
];

export const educations = [
	{
		id: 1,
		title: "Bachelor Degree(Information Technology)",
		duration: "2020 - 2024",
		institution: "Parul University",
	},
	{
		id: 2,
		title: "Higher Secondary Certificate",
		duration: "2018 - 2020",
		institution: "Utkarsha Vidyalaya",
	}
]
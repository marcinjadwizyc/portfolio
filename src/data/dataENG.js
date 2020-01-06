import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default {
	header: {
		links: [
			{
				id: "about",
				text: "About"
			},
			{
				id: "projects",
				text: "Projects"
			},
			{
				id: "contact",
				text: "Contact"
			}
		],
		title: "Marcin Jadwiżyc",
		subtitle: "Front-end developer"
	},
	about: {
		texts: [
			"Hi! My name is Marcin Jadwiżyc and I'm programming websites and web applications. I started my journey with front-end about 2 years ago. At first I was doing a lot of self study and now for about a year I'm also working as a Front-end Developer. I'm experienced in programming layouts, refactoring existing UI components and work with a large codebases.",
			"On my free time I continually develop my front-end skills, especially around JavaScript. As of today I'm focusing on expanding my knowledge about React and I'm also planning to learn a bit of Vue.js. Besides programming I play video games, meditate and consume a lot of new music and movies.",
			'You\'re welcome to check my projects under the "Projects" tab. If you would like to contact me please use the form that you can find on the page under "Contact" tab or you can visit my GitHub and LinkedIn profiles that are linked below.'
		],
		list: {
			title: "Technologies:",
			content: [ "HTML5", "CSS3", "JavaScript ES6+", "React", "Gatsby" ]
		},
		links: [
			{
				url: "https://github.com/marcinjadwizyc",
				icon: <FaGithub />,
				name: "GitHub"
			},
			{
				url: "https://www.linkedin.com/in/marcin-jadwi%C5%BCyc-1b3557135/",
				icon: <FaLinkedin />,
				name: "LinkedIn"
			}
		]
	},
	projects: [
		{
			id: "clipboard",
			title: "Clipboard - HTML & CSS",
			liveUrl: "/projects/clipboard/index.html",
			gitUrl: "https://github.com/marcinjadwizyc/clipboardTheme"
		},
		{
			id: "fylo",
			title: "Fylo - HTML, CSS & JS",
			liveUrl: "/projects/fylo/index.html",
			gitUrl: "https://github.com/marcinjadwizyc/fyloDarkTheme"
		},
		{
			id: "bookmark",
			title: "Bookmark - Gatsby",
			liveUrl: "/projects/bookmark/index.html",
			gitUrl: "https://github.com/marcinjadwizyc/bookmarkTheme"
		},
		{
			id: "todo",
			title: "To Do List - React",
			liveUrl: "/projects/todo/index.html",
			gitUrl: "https://github.com/marcinjadwizyc/toDoList"
		}
	],
	contact: {
		btn: "Send",
		inputs: [
			{
				name: "name",
				type: "text",
				label: "Name",
				placeholder: "Your name...",
				validationMsg: "Add your name",
				isTextarea: false
			},
			{
				name: "email",
				type: "email",
				label: "E-mail",
				placeholder: "Your e-mail address...",
				validationMsg: "Add your e-mail address",
				isTextarea: false
			},
			{
				name: "subject",
				type: "text",
				label: "Subject",
				placeholder: "Subject of your message...",
				validationMsg: "Add the subject",
				isTextarea: false
			},
			{
				name: "message",
				type: "",
				label: "Message",
				placeholder: "Your message...",
				validationMsg: "Add your message",
				isTextarea: true
			}
		]
	}
};

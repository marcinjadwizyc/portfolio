import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default {
	header: {
		links: [
			{
				id: "about",
				text: "O mnie"
			},
			{
				id: "projects",
				text: "Projekty"
			},
			{
				id: "contact",
				text: "Kontakt"
			}
		],
		title: "Marcin Jadwiżyc",
		subtitle: "Frontend developer"
	},
	about: {
		texts: [
			"Cześć! Nazywam się Marcin Jadwiżyc i jestem programistą zajmującym się tworzeniem wyglądu stron internetowych oraz aplikacji webowych. Tematyką frontendową zajmuję się od około 2 lat, na początku ucząc się samodzielnie, a od około roku, również zawodowo na stanowisku Front-end Developera. Moje doświadczenie obejmuje tworzenie layoutów, refaktoryzację istniejących komponentów interfejsu użytkownika, oraz pracę z rozbudowaną bazą kodu (tzw. spaghetti code).",
			"Prywatnie ciągle rozwijam swoje kompetencje, w szczegolności skupiając się na zagadnieniach związanych z JavaScriptem. Obecnie poszerzam swoją wiedzę dot. Reacta oraz planuję rozpocząć naukę Vue.js. Poza programowaniem gram na konsoli, medytuję lub pochłaniam nowości muzyczne i filmowe.",
			'Zapraszam do zapoznania się z moimi projektami w zakładce "Projekty". Jeśli chcesz się ze mną skontaktować, skorzystaj z formularza na stronie lub zajrzyj na moje profile na GitHub i LinkedIn, do których linki znajdziesz poniżej.'
		],
		list: {
			title: "Technologie:",
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
			title: "Clipboard - HTML i CSS",
			liveUrl: "/projects/clipboard/index.html",
			gitUrl: "https://github.com/marcinjadwizyc/clipboardTheme"
		},
		{
			id: "fylo",
			title: "Fylo - HTML, CSS i JS",
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
		btn: "Wyślij",
		inputs: [
			{
				name: "name",
				type: "text",
				label: "Imię",
				placeholder: "Twoje imię...",
				validationMsg: "Dodaj imię",
				isTextarea: false
			},
			{
				name: "email",
				type: "email",
				label: "E-mail",
				placeholder: "Twoje adres e-mail...",
				validationMsg: "Dodaj adres e-mail",
				isTextarea: false
			},
			{
				name: "subject",
				type: "text",
				label: "Temat",
				placeholder: "Temat twojej wiadomości...",
				validationMsg: "Dodaj temat wiadomości",
				isTextarea: false
			},
			{
				name: "message",
				type: "",
				label: "Wiadomość",
				placeholder: "Treść twojej wiadomości...",
				validationMsg: "Dodaj treść wiadomości",
				isTextarea: true
			}
		]
	}
};

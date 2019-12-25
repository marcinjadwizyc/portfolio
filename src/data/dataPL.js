import React from "react";
import { FaGithub, FaLinkedin, FaAddressCard } from "react-icons/fa";

export default {
	header: {
		title: "Marcin Jadwiżyc",
		subtitle: "Frontend developer",
		navLinks: [
			{ id: "about", name: "O mnie" },
			{ id: "projects", name: "Projekty" },
			{ id: "contact", name: "Kontakt" }
		]
	},
	about: {
		texts: [
			"Cześć! Nazywam się Marcin Jadwiżyc i jestem programistą zajmującym się tworzeniem wyglądu stron internetowych oraz aplikacji webowych. Tematyką frontendową zajmuję się od około 2 lat, na początku ucząc się samodzielnie, a od około roku, również zawodowo na stanowisku Front-end Developera. Moje doświadczenie obejmuje tworzenie layoutów, refaktoryzację istniejących komponentów interfejsu użytkownika, oraz pracę z rozbudowaną bazą kodu (tzw. spaghetti code).",
			"Prywatnie ciągle rozwijam swoje kompetencję w szczegolności skupiając się na zagadnieniach związanych z JavaScriptem. Obecnie planuję poszerzyć swoją wiedzę dot. Reacta oraz rozpocząć naukę Vue.js. Poza programowaniem zawzięcie pochłaniam nowości muzyczne, gram na konsoli lub medytuję.",
			'Zapraszam do zapoznania się z moimi projektami w zakładce "Projekty". Jeśli chcesz się ze mną skontaktować skorzystaj z formularza na stronie lub zajrzyj na moje profile na GitHub i LinkedIn do których linki znajdziesz poniżej.'
		],
		list: {
			title: "Technologie:",
			content: [ "HTML5", "CSS3", "JavaScript ES6+", "React", "Gatsby" ]
		},
		links: [
			{
				url: "https://github.com/marcinjadwizyc",
				icon: <FaGithub />,
				text: "GitHub"
			},
			{
				url: "https://www.linkedin.com/in/marcin-jadwi%C5%BCyc-1b3557135/",
				icon: <FaLinkedin />,
				text: "LinkedIn"
			},
			{
				url: "https://drive.google.com/file/d/1dNvd7Ht8IXqT0_N8FpNF3bRgLv4eVG92/view?usp=sharing",
				icon: <FaAddressCard />,
				text: "CV"
			}
		]
	},
	contact: {
		inputs: [
			{
				name: "name",
				label: "Imię",
				type: "text",
				placeholder: "Twoje imię...",
				isTextarea: false
			},
			{
				name: "email",
				label: "E-mail",
				type: "email",
				placeholder: "Twój adres e-mail...",
				isTexarea: false
			},
			{
				name: "subject",
				label: "Temat",
				type: "text",
				placeholder: "Temat twojej wiadomości...",
				isTextarea: false
			},
			{
				name: "message",
				label: "Wiadomość",
				placeholder: "Treść twojej wiadomości...",
				isTextarea: true
			}
		]
	}
};

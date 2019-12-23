import React, { useContext } from "react";

import ContentContext from "../contentContext";
import About from "./subSections/About";
import Projects from "./subSections/Projects";
import Contact from "./subSections/Contact";

const Main = () => {
	const context = useContext(ContentContext);

	let classes = [ "main" ];

	if (context.activeSection !== "") {
		classes.push("main--open");
	}

	let section;

	switch (context.activeSection) {
		case "about":
			section = <About />;
			break;
		case "projects":
			section = <Projects />;
			break;
		case "contact":
			section = <Contact />;
			break;
		default:
			section = null;
	}

	return <main className={classes.join(" ")}>{section}</main>;
};

export default Main;

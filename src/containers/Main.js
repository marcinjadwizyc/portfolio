import React from "react";
import PropTypes from "prop-types";

import Section from "../containers/Section";
import About from "../fragments/About";
import Projects from "../fragments/Projects";
import Contact from "../fragments/Contact";

const Main = ({ activeSection }) => {
	let classes = [ "main" ];

	if (activeSection !== "") {
		classes.push("main--open");
	}

	const sectionsData = [
		{ name: "about", content: <About /> },
		{ name: "projects", content: <Projects /> },
		{ name: "contact", content: <Contact /> }
	];

	const sections = sectionsData.map((item) => {
		let isOpen;

		if (activeSection === item.name) {
			isOpen = true;
		} else {
			isOpen = false;
		}

		return (
			<Section key={item.name} name={item.name} isOpen={isOpen}>
				{item.content}
			</Section>
		);
	});

	return <main className={classes.join(" ")}>{sections}</main>;
};

Main.propTypes = {
	activeSection: PropTypes.string.isRequired
}

export default Main;

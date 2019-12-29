import React from "react";

import Section from "../containers/Section";

const Main = ({ activeSection }) => {
	let classes = [ "main" ];

	if (activeSection !== "") {
		classes.push("main--open");
	}

	const sectionsData = [
		{ id: "about", content: "Hello from About" },
		{ id: "projects", content: "Hello from Projects" },
		{ id: "contact", content: "Hello from Contact" }
	];

	const sections = sectionsData.map((item) => {
		let isOpen;

		if (activeSection === item.id) {
			isOpen = true;
		} else {
			isOpen = false;
		}

		return (
			<Section id={item.id} isOpen={isOpen}>
				{item.content}
			</Section>
		);
	});

	return <main className={classes.join(" ")}>{sections}</main>;
};

export default Main;

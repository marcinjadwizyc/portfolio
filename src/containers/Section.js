import React from "react";

const Section = ({ id, isOpen, children }) => {
	let classes = [ "section" ];

	if (isOpen) {
		classes.push("section--open");
	}

	classes.push(`${id}`);

	return <section className={classes.join(" ")}>{children}</section>;
};

export default Section;

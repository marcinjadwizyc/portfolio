import React from "react";
import PropTypes from "prop-types";

const Section = ({ name, isOpen, children }) => {
	let classes = [ "section" ];

	if (isOpen) {
		classes.push("section--open");
	}

	classes.push(`${name}`);

	return <section className={classes.join(" ")}>{children}</section>;
};

Section.propTypes = {
	name: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired
}

export default Section;

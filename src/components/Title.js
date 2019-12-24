import React from "react";
import PropTypes from "prop-types";

const Title = ({ level, isPrimaryColor, text }) => {
	let classes = [ "title" ];

	if (isPrimaryColor) {
		classes.push("title--primaryColor");
	}

	switch (level) {
		case 1:
			classes.push("title--primary");
			return <h1 className={classes.join(" ")}>{text}</h1>;
		case 2:
			classes.push("title--secondary");
			return <h2 className={classes.join(" ")}>{text}</h2>;
		case 3:
			classes.push("title--tertiary");
			return <h3 className={classes.join(" ")}>{text}</h3>;
		default:
			return null;
	}
};

Title.propTypes = {
	level: PropTypes.number,
	isPrimaryColor: PropTypes.bool,
	text: PropTypes.string.isRequired
};

Title.defaultProps = {
	level: 2,
	isPrimaryColor: false
};

export default Title;

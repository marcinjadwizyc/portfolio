import React from "react";
import PropTypes from "prop-types";

import Title from "../components/Title";
import Nav from "../components/Nav";

const Header = ({ activeSection, data }) => {
	const { header: content } = data;

	let classes = [ "header" ];

	if (activeSection !== "") {
		classes.push("header--mainOpen");
	}

	return (
		<header className={classes.join(" ")}>
			<Title level={1}>{content.title}</Title>
			<Title>{content.subtitle}</Title>
			<Nav />
		</header>
	);
};

Header.propTypes = {
	activeSection: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired
};

export default Header;

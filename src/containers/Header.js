import React from "react";

import Nav from "../components/Nav";

const Header = ({ activeSection }) => {
	let classes = [ "header" ];

	if (activeSection !== "") {
		classes.push("header--mainOpen");
	}

	return (
		<header className={classes.join(" ")}>
			<Nav />
		</header>
	);
};

export default Header;

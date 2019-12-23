import React, { useContext } from "react";

import ContentContext from "../contentContext";
import Title from "../components/Title";
import Nav from "../components/Nav";

const Header = () => {
	const context = useContext(ContentContext);
	const { data: { header: data } } = context;

	let classes = [ "header" ];

	if (context.activeSection !== "") {
		classes.push("header--mainOpen");
	}

	return (
		<header className={classes.join(" ")}>
			<Title level={1} isPrimaryColor={true} text={data.title} />
			<Title text={data.subtitle} />
			<Nav />
		</header>
	);
};

export default Header;

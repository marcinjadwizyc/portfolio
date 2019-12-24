import React, { useContext } from "react";

import ContentContext from "../../contentContext";
import Text from "../../components/Text";
import List from "../../components/List";
import IconLink from "../../components/IconLink";

const About = () => {
	const { data: { about: data } } = useContext(ContentContext);

	const texts = data.texts.map((item) => {
		return <Text key={item} content={item} />;
	});

	const links = data.links.map((item) => {
		return <IconLink key={item.text} url={item.url} text={item.text} icon={item.icon} />;
	});

	return (
		<section className="about">
			{texts}
			<List title={data.list.title} content={data.list.content} />
			<div className="about__row">{links}</div>
		</section>
	);
};

export default About;

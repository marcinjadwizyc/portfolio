import React, { useContext } from "react";
import StateContext from "../context/stateContext";

import Project from "../components/Project";

const Projects = () => {
	const { data: { projects: data } } = useContext(StateContext);

	const tiles = data.map((item) => {
		return <Project key={item.id} data={item} />;
	});

	return <React.Fragment>{tiles}</React.Fragment>;
};

export default Projects;

import React, { useState } from "react";
import StateContext from "../context/stateContext";
import dataPL from "../data/dataPL";
import "../scss/global.scss";

import Header from "../containers/Header";
import Main from "../containers/Main";
import Footer from "../containers/Footer";

const Index = () => {
	const [ activeSection, changeActiveSection ] = useState("about");

	const activeSectionHandler = (event) => {
		const newActiveSection = event.target.id;

		changeActiveSection(newActiveSection);
	};

	return (
		<div className="container">
			<StateContext.Provider value={{ data: dataPL, activeSectionHandler: activeSectionHandler }}>
				<Header activeSection={activeSection} />
				<Main activeSection={activeSection} />
				<Footer />
			</StateContext.Provider>
		</div>
	);
};

export default Index;

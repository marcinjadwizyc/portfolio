import React, { useState } from "react";
import StateContext from "../context/stateContext";
import dataPL from "../data/dataPL";
import dataENG from "../data/dataENG";
import "../scss/global.scss";

import ParticlesBg from "../components/ParticlesBg";
import Header from "../containers/Header";
import Main from "../containers/Main";
import Footer from "../containers/Footer";

const Index = () => {
	const [ lang, changeLang ] = useState("PL");
	const [ activeSection, changeActiveSection ] = useState("");

	const activeSectionHandler = (event) => {
		const newActiveSection = event.target.id;

		changeActiveSection(newActiveSection);
	};

	const data = lang === "PL" ? dataPL : dataENG;

	return (
		<div className="container">
			<ParticlesBg />
			<StateContext.Provider value={{ data: dataPL, activeSection: activeSection, activeSectionHandler: activeSectionHandler }}>
				<Header activeSection={activeSection} data={data} />
				<Main activeSection={activeSection} />
				<Footer />
			</StateContext.Provider>
		</div>
	);
};

export default Index;

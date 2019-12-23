import React, { useState } from "react";
import "../scss/global.scss";
import dataPL from "../data/dataPL";
import dataENG from "../data/dataENG";

import ContentContext from "../contentContext";
import ParticlesBg from "../components/ParticlesBg";
import Header from "../containers/Header";
import Main from "../containers/Main";
import Footer from "../containers/Footer";

const Index = () => {
	const [ lang, changeLang ] = useState("PL");
	const [ activeSection, changeActiveSection ] = useState("");

	const activeSectionHandler = (event) => {
		const sectionID = event.target.id;

		changeActiveSection(sectionID);
	};

	let data;

	if (lang === "PL") {
		data = dataPL;
	} else {
		data = dataENG;
	}

	return (
		<div className="container">
			<ContentContext.Provider
				value={{ data: data, activeSection: activeSection, activeSectionHandler: activeSectionHandler }}
			>
				<ParticlesBg />
				<Header />
				<Main />
				<Footer />
			</ContentContext.Provider>
		</div>
	);
};

export default Index;

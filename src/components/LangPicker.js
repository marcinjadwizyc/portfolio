import React from "react";
import PropTypes from "prop-types";
import styles from "../scss/modules/langPicker.module.scss";

const LangPicker = ({ activeSection, currentLang, changeLangHandler }) => {
	let classes = [ `${styles.picker}` ];

	if (activeSection !== "") {
		classes.push(`${styles.pickerMainOpen}`);
	}

	const buttons = [ "PL", "ENG" ].map((item) => {
		let btnClasses = [ `${styles.btn}` ];

		if (currentLang === item) {
			btnClasses.push(`${styles.btnActive}`);
		}

		return (
			<button key={item} className={btnClasses.join(" ")} onClick={(event) => changeLangHandler(event)}>
				{item}
			</button>
		);
	});

	return (
		<div className={classes.join(" ")}>
			{buttons[0]}
			<span className={styles.bar}>|</span>
			{buttons[1]}
		</div>
	);
};

LangPicker.propTypes = {
	activeSection: PropTypes.string.isRequired,
	currentLang: PropTypes.string.isRequired,
	changeLangHandler: PropTypes.func.isRequired
};

export default LangPicker;

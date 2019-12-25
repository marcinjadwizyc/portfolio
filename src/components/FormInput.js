import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../scss/modules/formInput.module.scss";

const FormInput = ({ inputData, value, changeHandler, isInvalid }) => {
	const { name, label, type, placeholder, isTextarea } = inputData;
	const [ isFocused, changeFocusStatus ] = useState(false);

	const focusInHandler = () => {
		changeFocusStatus(true);
	};

	const focusOutHandler = () => {
		changeFocusStatus(false);
	};

	let classes = [ `${styles.container}` ];

	if (isFocused) {
		classes.push(`${styles.containerFocused}`);
	}

	if (isInvalid) {
		classes.push(`${styles.containerInvalid}`);
	}

	let input;

	if (isTextarea) {
		input = (
			<textarea
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={(event) => changeHandler(event)}
				onFocus={focusInHandler}
				onBlur={focusOutHandler}
				className={styles.input}
				rows="5"
			/>
		);
	} else {
		input = (
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={(event) => changeHandler(event)}
				onFocus={focusInHandler}
				onBlur={focusOutHandler}
				className={styles.input}
			/>
		);
	}

	return (
		<div className={classes.join(" ")}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			{input}
		</div>
	);
};

FormInput.propTypes = {
	inputData: PropTypes.object.isRequired,
	changeHandler: PropTypes.func.isRequired,
	isValid: PropTypes.bool.isRequired
};

export default FormInput;

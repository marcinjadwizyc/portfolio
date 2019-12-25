import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../scss/modules/formInput.module.scss";

const FormInput = ({ label, name, type, value, placeholder, changeHandler, isTextarea }) => {
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

	let input;

	if (isTextarea) {
		input = (
			<textarea
				id={name}
				name={name}
				placeholder={placeholder}
				onChange={(event) => changeHandler(event)}
				onFocus={focusInHandler}
				onBlur={focusOutHandler}
				className={styles.input}
				rows="5"
			>
				{value}
			</textarea>
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
			<div className={styles.inputBox}>{input}</div>
		</div>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	changeHandler: PropTypes.func.isRequired,
	isTextarea: PropTypes.bool.isRequired
};

export default FormInput;

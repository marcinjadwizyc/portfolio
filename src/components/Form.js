import React, { Component } from "react";
import PropTypes from "prop-types";

import FormInput from "./FormInput";

class Form extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: ""
	};

	changeHandler = (event) => {
		const inputName = event.target.id;

		const newState = {
			...this.state,
			[inputName]: event.target.value
		};

		this.setState(newState);
	};

	render() {
		const inputs = this.props.data.inputs.map((item) => {
			return (
				<FormInput
					key={item.name}
					name={item.name}
					label={item.label}
					type={item.type}
					value={this.state[item.name]}
					placeholder={item.placeholder}
					changeHandler={this.changeHandler}
					isTextarea={item.isTextarea}
				/>
			);
		});

		return (
			<form name="contact" method="post" className="form">
				{inputs}
			</form>
		);
	}
}

export default Form;

import React, { Component } from "react";
import PropTypes from "prop-types";

import FormInput from "./FormInput";

class Form extends Component {
	state = {
		name: {
			value: "",
			isInvalid: false
		},
		email: {
			value: "",
			isInvalid: false
		},
		subject: {
			value: "",
			isInvalid: false
		},
		message: {
			value: "",
			isInvalid: false
		}
	};

	changeHandler = (event) => {
		const inputName = event.target.id;

		const newState = {
			...this.state
		};

		newState[inputName].value = event.target.value;

		this.setState(newState);
	};

	render() {
		const inputs = this.props.data.inputs.map((item) => {
			return (
				<FormInput
					key={item.name}
					inputData={item}
					value={this.state[item.name].value}
					isInvalid={this.state[item.name].isInvalid}
					changeHandler={this.changeHandler}
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

Form.propTypes = {
	data: PropTypes.object.isRequired
};

export default Form;

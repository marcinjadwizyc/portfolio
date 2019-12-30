import React, { Component } from 'react'

import Input from "../components/Input";
import Btn from "../components/Btn";

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
        },
    }

    changeHandler = event => {
        const inputID = event.target.id;

        const newState = {
            ...this.state
        }

        newState[inputID].value = event.target.value;

        this.setState(newState)
    }

    submitHandler = (event) => {
        const emailTest = /^\S+@\S+\.\S+$/;
        const newState = {...this.state};

        for(let key in this.state){
            let test;

            if(key === "email"){
                test = emailTest.test(this.state[key].value)
            } else {
                test = this.state[key].value !== ""
            }

            if(test){
                newState[key].isInvalid = false;
            } else {
                event.preventDefault();
                newState[key].isInvalid = true;
            }
        }

        this.setState(newState);
    }

    render() {
        const inputs = this.props.inputsData.map(item => {
            return <Input key={item.name} data={item} value={this.state[item.name].value} isInvalid={this.state[item.name].isInvalid} changeHandler={this.changeHandler} />
        })

        return (
            <form className="form" name="Contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact" />
                {inputs}
                <Btn text={this.props.btnText} clickHandler={this.submitHandler} />
            </form>
        )
    }
}

export default Form;
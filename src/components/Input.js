import React, {useState} from 'react'
import PropTypes from "prop-types";
import styles from "../scss/modules/input.module.scss";

const Input = ({data, value, isInvalid, changeHandler}) => {
    const [isFocused, changeFocus] = useState(false);

    const focusInHandler = () => {
        changeFocus(true);
    }

    const focusOutHandler = () => {
        changeFocus(false);
    }

    let classes = [`${styles.container}`];

    if(isFocused) {
        classes.push(`${styles.containerFocused}`)
    }

    if(isInvalid) {
        classes.push(`${styles.containerInvalid}`)
    }

    let input;

    if(data.isTextarea) {
        input =  <textarea
                    rows="5"
                    id={data.name}
                    name={data.name}
                    className={styles.input} 
                    value={value} 
                    placeholder={data.placeholder}
                    onChange={event => changeHandler(event)}
                    onFocus={focusInHandler}
                    onBlur={focusOutHandler} />
    } else {
        input = <input
                    type={data.type}
                    id={data.name}
                    name={data.name}
                    className={styles.input} 
                    value={value} 
                    placeholder={data.placeholder}
                    onChange={event => changeHandler(event)}
                    onFocus={focusInHandler}
                    onBlur={focusOutHandler} />
    }

    return (
        <div className={classes.join(" ")}>
            <label htmlFor={data.name} className={styles.label}>{data.label}</label>
            {input}
            <span className={styles.validation}>{data.validationMsg}</span>
        </div>
    )
}

Input.propTypes = {
    data: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired, 
    changeHandler: PropTypes.func.isRequired
}

export default Input;
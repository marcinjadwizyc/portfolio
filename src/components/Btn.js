import React from 'react'
import PropTypes from "prop-types";
import styles from "../scss/modules/btn.module.scss";

const Btn = ({text, clickHandler}) => {
    return (
        <button className={styles.btn} onClick={event => clickHandler(event)}>
            {text}
        </button>
    )
}

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Btn;
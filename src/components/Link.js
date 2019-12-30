import React from 'react'
import PropTypes from "prop-types";
import styles from "../scss/modules/link.module.scss";

const Link = ({data}) => {
    return (
        <a className={styles.link} target="_blank" href={data.url} rel="noreferrer noopener">
            {data.icon}
            <p className={styles.text}>{data.name}</p>
        </a>
    )
}

Link.propTypes = {
    data: PropTypes.object.isRequired
}

export default Link;
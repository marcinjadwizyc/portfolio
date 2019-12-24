import React from "react";
import PropTypes from "prop-types";
import styles from "../scss/modules/iconLink.module.scss";

const IconLink = ({ url, text, icon }) => {
	return (
		<a className={styles.link} href={url} target="_blank" rel="noreferrer noopener">
			<span className={styles.icon}>{icon}</span>
			<span className={styles.text}>{text}</span>
		</a>
	);
};

IconLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired
};

export default IconLink;

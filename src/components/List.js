import React from "react";
import PropTypes from "prop-types";
import styles from "../scss/modules/list.module.scss";

const List = ({ title, content }) => {
	const items = content.map((item) => {
		return (
			<li key={item} className={styles.item}>
				{item}
			</li>
		);
	});

	return (
		<div className={styles.list}>
			<span className={styles.title}>{title}</span>
			<ul className={styles.body}>{items}</ul>
		</div>
	);
};

List.propTypes = {
	title: PropTypes.string,
	content: PropTypes.array.isRequired
};

export default List;

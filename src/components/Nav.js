import React, { useContext } from "react";
import StateContext from "../context/stateContext";
import styles from "../scss/modules/nav.module.scss";

const Nav = () => {
	const context = useContext(StateContext);

	const items = context.data.header.links.map((item) => {
		return (
			<li className={styles.item}>
				<button id={item.id} onClick={(event) => context.activeSectionHandler(event)}>
					{item.text}
				</button>
			</li>
		);
	});

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>{items}</ul>
		</nav>
	);
};

export default Nav;

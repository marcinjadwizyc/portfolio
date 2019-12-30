import React, { useContext } from "react";
import StateContext from "../context/stateContext";
import styles from "../scss/modules/nav.module.scss";

const Nav = () => {
	const context = useContext(StateContext);

	const items = context.data.header.links.map((item) => {
		let btnClasses = [`${styles.btn}`];

		if(item.id === context.activeSection) {
			btnClasses.push(`${styles.btnActive}`)
		}

		return (
			<li key={item.id} className={styles.item}>
				<button id={item.id} className={btnClasses.join(" ")} onClick={(event) => context.activeSectionHandler(event)}>
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

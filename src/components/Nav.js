import React, { useContext } from "react";
import styles from "../scss/modules/nav.module.scss";

import ContentContext from "../contentContext";

const Nav = () => {
	const context = useContext(ContentContext);

	const items = context.data.header.navLinks.map((item) => {
		let btnClasses = [ `${styles.btn}` ];

		if (context.activeSection === item.id) {
			btnClasses.push(`${styles.btnActive}`);
		}

		return (
			<li key={item.id} className={styles.item}>
				<button
					id={item.id}
					className={btnClasses.join(" ")}
					onClick={(event) => context.activeSectionHandler(event)}
				>
					{item.name}
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

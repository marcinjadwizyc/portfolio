import React from "react";
import { Link } from "gatsby";
import "../scss/global.scss";
import styles from "../scss/modules/btn.module.scss";

import SEO from "../components/seo";

const Error = () => {
	return (
		<React.Fragment>
			<SEO />
			<div className="error">
				<p>404 | Page not found</p>
				<Link to="/" className={styles.btn}>
					Back to main page
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Error;

import React, { useContext } from "react";

import ContentContext from "../../contentContext";
import Form from "../../components/Form";

const Contact = () => {
	const { data: { contact: data } } = useContext(ContentContext);

	return (
		<section className="contact">
			<Form data={data} />
		</section>
	);
};

export default Contact;

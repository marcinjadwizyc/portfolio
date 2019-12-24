import React from "react";
import PropTypes from "prop-types";

const Text = ({ content }) => {
	return <p className="text">{content}</p>;
};

Text.propTypes = {
	content: PropTypes.string.isRequired
};

export default Text;

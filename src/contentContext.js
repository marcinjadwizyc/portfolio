import React from "react";

const ContentContext = React.createContext({
	data: {},
	activeSection: "",
	activeSectionHandler: () => {}
});

export default ContentContext;

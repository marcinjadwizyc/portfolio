import React from "react";

const StateContext = React.createContext({
	data: {},
	activeSection: "",
	activeSectionHandler: () => {}
});

export default StateContext;

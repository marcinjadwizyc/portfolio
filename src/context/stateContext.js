import React from "react";

const StateContext = React.createContext({
	data: {},
	activeSectionHandler: () => {}
});

export default StateContext;

import React, {useContext} from 'react'
import StateContext from "../context/stateContext";

const Projects = () => {
    const context = useContext(StateContext);

    return (
        <React.Fragment>
            <p>Hello from Projects</p>
        </React.Fragment>
    )
}

export default Projects;
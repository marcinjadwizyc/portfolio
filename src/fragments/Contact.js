import React, {useContext} from 'react'
import StateContext from "../context/stateContext";

import Form from "../components/Form";

const Contact = () => {
    const {data: {contact:data}} = useContext(StateContext);

    return (
        <React.Fragment>
            <Form btnText={data.btn} inputsData={data.inputs} />
        </React.Fragment>
    )
}

export default Contact;
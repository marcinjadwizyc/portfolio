import React from 'react'
import PropTypes from "prop-types";

const Title = ({level, children}) => {
    let classes = ["title"];

    switch(level){
        case 1:
            classes.push("title--primary");
            return <h1 className={classes.join(" ")}>{children}</h1>
        case 2:
            classes.push("title--secondary");
            return <h2 className={classes.join(" ")}>{children}</h2>
        default:
            return null;
    }
}

Title.propTypes = {
    level: PropTypes.number
}

Title.defaultProps = {
    level: 2
}

export default Title;
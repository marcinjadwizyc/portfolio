import React from 'react'
import PropTypes from "prop-types";
import styles from "../scss/modules/list.module.scss";

const List = ({data}) => {
    const items = data.content.map(item => {
        return <li key={item} className={styles.item}>{item}</li>
    })

    return (
        <div className={styles.container}>
            <span className={styles.title}>{data.title}</span>
            <ul className={styles.list}>
                {items}
            </ul>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.object.isRequired
}

export default List;
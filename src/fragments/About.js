import React, {useContext} from 'react'
import StateContext from "../context/stateContext";

import Text from "../components/Text";
import List from "../components/List";
import Link from "../components/Link";

const About = () => {
    const {data: {about:data}} = useContext(StateContext);

    const texts = data.texts.map(item => {
        return <Text key={item}>{item}</Text>
    })

    const links = data.links.map(item => {
        return <Link key={item.name} data={item} />
    })

    return (
        <React.Fragment>
            {texts}
            <List data={data.list} />
            <div className="about__row">
                {links}
            </div>
        </React.Fragment>
    )
}

export default About;
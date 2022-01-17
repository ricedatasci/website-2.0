import React from 'react'
import "../../styles/general.css"

const Blurb = (props) => {

    return (
        <p className="blurb"> 
            {props.description}
        </p>

    )
}
export default Blurb

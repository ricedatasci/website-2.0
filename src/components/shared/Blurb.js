import React from 'react'
import "../../styles/general.css"

const Blurb = (props) => {

    return (
        <p style={{"fontSize": "x-large", "color": `${props.color}`}}> 
            {props.description}
        </p>

    )
}
export default Blurb

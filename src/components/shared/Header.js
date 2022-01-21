import React from 'react'
import "../../styles/general.css"

const Header = (props) => {
    // const title = props.title.replace(props.boldedText, '<strong>' + props.boldedText + '</strong>')
    return (
        <h1 style={{"fontSize": "350%", 
                    "fontFamily": `${props.font}`, 
                    "color": `${props.color}`,
                    "fontWeight": `${props.bold ? "bold": "normal"}`}}>
            
            {props.titleBold}{" "}
            <span style={{"fontWeight": "normal"}}>{props.title}</span>
        </h1>
    )
}

export default Header

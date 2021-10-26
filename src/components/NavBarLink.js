import React from "react"
import {Link} from "react-router-dom"

const NavBarLink = (props) => {
    return (
        <div>
            <Link to={props.link}>{props.title}</Link>
            
        </div>
    )
}

export default NavBarLink

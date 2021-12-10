import React from "react"
import {Link} from "react-router-dom"
import "../styles/NavBarLink.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaAngleRight } from "react-icons/fa"

const NavBarLink = (props) => {
        
    return (
        <div className="link">
            {/* <FontAwesomeIcon icon="chevron-right" /> */}
            <FaAngleRight />
            <Link className="linkText" to={props.link}>{props.title}</Link>
        </div>
    )
}

export default NavBarLink

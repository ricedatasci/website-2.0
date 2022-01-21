import React from 'react'
import {Link} from "react-router-dom"
import "../../styles/NavBar.css"
import NavBarLink from "./NavBarLink.js"
import logo from "../../media/long_facebook.png"

const NavBar = () => {
    const pages = [
        {title: "home", link: "/"},
        {title: "team", link: "/team"},
        {title: "programs", link: "/programs"},
        {title: "join", link: "/join"}
    ]
    return (
        <div className="navContainer">
            <Link to="/">
                <img src={logo} style={{"width": "250px", "height":"100%"}} />
            </Link>
            <div className="navLinks">
                {pages.map((page) => {
                    return (
                        <NavBarLink title={page.title} link={page.link} />
                    )
                })}
            </div>
                
        </div>
        
    )
}
export default NavBar;
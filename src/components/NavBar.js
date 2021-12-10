import React from 'react'
import "../styles/NavBar.css"
import NavBarLink from "./NavBarLink.js"

const NavBar = () => {
    const pages = [
        {title: "home", link: "/"},
        {title: "about", link: "/about"},
        {title: "programs", link: "/programs"},
        {title: "join", link: "/join"}
    ]
    return (
        <div className="navContainer">
            <div className="navContainerSmaller">
                <h1>RICE DATA SCIENCE CLUB</h1>
                <p>providing resources and skills to work with and understand data</p>
                <div className="navLinks">
                    {pages.map((page) => {
                        return (
                            <NavBarLink title={page.title} link={page.link} />
                        )
                    })}
                </div>
                
            </div>
            
        </div>
    )
}
export default NavBar;
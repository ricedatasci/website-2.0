import React from 'react'
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import "../styles/general.css"

const Layout = ({children}) => {
    
    return (
        <div className="layout">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout
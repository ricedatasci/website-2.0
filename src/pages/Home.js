import React from 'react'
import Layout from "../layouts/Layout.js"
//import "../styles/general.css"
import "../styles/Home.css"

const Home = () => {
    
    return (
        <Layout>
            <div className="homeContainer">
                <div className="slideShow"> 
                    slideshow
                </div>
                <h1>
                    welcome to rice data sci
                </h1>
                <p>
                    We’re a community of undergrads studying and practicing data science at Rice!
                </p>
            </div>
        </Layout>

    )
}

export default Home

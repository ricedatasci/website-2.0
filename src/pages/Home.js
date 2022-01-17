import React from 'react'
import Layout from "../layouts/Layout.js"
import Header from "../components/shared/Header.js"
import Blurb from "../components/shared/Blurb.js"
import Slideshow from "../components/home/Slideshow"
import "../styles/general.css"
import "../styles/Home.css"

const Home = () => {

    const welcomeHeader = "Welcome to Rice DataSci!"
    const aboutBlurb = "We're a community of undergrads studying and practicing data science at Rice!"
    const interestBlurb = "Check out some of our recent events, learn more about us, or join!"
    
    return (
        <Layout>
            <div className="homeContainer">
                {/* insert slideshow */}
                <div className="slideShow"> 
                    <Slideshow />
                </div>
                <Header title={welcomeHeader} />
                <Blurb description={aboutBlurb} horizontalPadding={5}/>
                <Blurb description={interestBlurb} horizontalPadding={5}/>
            </div>
        </Layout>

    )
}

export default Home

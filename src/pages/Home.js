import React from 'react'
import Layout from "../layouts/Layout.js"
import Header from "../components/shared/Header.js"
import Blurb from "../components/shared/Blurb.js"
import SlideShow from "../components/home/Slideshow.js"
import "../styles/general.css"
import "../styles/Home.css"

const Home = () => {

    const headline = "something catchy"
    const aboutBlurb = "We're a community of undergrads studying and practicing data science at Rice!"
    const interestBlurb = "Check out some of our recent events, learn more about us, or join!"
    
    return (
        <Layout>
            <div className="homeContainer">
                {/* first section */}
                <div className="firstSection">
                    <div className="firstSectionBio">
                        <Header title={headline} />
                        <Blurb description={aboutBlurb} horizontalPadding={5}/>
                    </div>
                    {/* insert slideshow */}
                    <div className="slideShowContainer"> 
                        <div className="slideShow">
                            <SlideShow />
                        </div>
                    </div>
                </div>
                
                
                {/* <Blurb description={interestBlurb} horizontalPadding={5}/> */}
            </div>
        </Layout>

    )
}

export default Home

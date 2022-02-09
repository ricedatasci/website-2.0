import React from 'react'
import Layout from "../layouts/Layout.js"
import {Link} from "react-router-dom"
import Header from "../components/shared/Header.js"
import Blurb from "../components/shared/Blurb.js"
import SlideShow from "../components/home/Slideshow.js"
import "../styles/general.css"
import "../styles/Home.css"

const Home = () => {

    const headlineBold = "Empowering"
    const headline = "Rice students through data"
    const aboutBlurb = "We are a community of undergrads studying and practicing data science at Rice!"
    const interestBlurb = "Check out some of our recent events, learn more about us, or join!"
    const aboutTitle = "About us"
    const aboutBlurbLong = "Rice Data Sci Club is an organization aiming to bolster the data science community at Rice University. We connect interested students with experienced mentors and provide career preparation, allowing future data scientists to explore more about the field and potential opportunities. Our goal is to create a coherent and interdisciplinary community for Data Science at Rice through academic and social events, and by collaborating with other university organizations such as the d2k lab."
    const eventsTitle = "Upcoming Events"
    
    return (
        <Layout>
            <div className="homeContainer">
                {/* first section <-- can prob turn into a component */} 
                <div className="firstSection">
                    <div className="firstSectionBio">
                        <Header titleBold={headlineBold} title={headline} bold={true} boldedText={headlineBold} 
                                color="black" font="sans-serif"/>
                        <Blurb description={aboutBlurb} color="black" horizontalPadding={5}/>
                        <Link className="eventsLinkContainer" to="/programs">
                            <button className="eventsButton">
                                check out events
                            </button>
                        </Link>
                        
                    </div>
                    <div className="slideShowContainer"> 
                        <div className="slideShow">
                            <SlideShow />
                        </div>
                    </div>
                </div>

                {/* about section */}
                <div className="aboutSection">
                    <div className="aboutSectionSlideShowContainer"> 
                        slideshow here
                    </div>
                    <div className="aboutSectionBio">
                        <Header titleBold={aboutTitle} color="black" font="sans-serif"/>
                        <Blurb description={aboutBlurbLong} color="black"/>
                    </div>
                </div>

                {/* upcoming events section */}
                <div className="upcomingEventsSection">


                </div>



            </div>
        </Layout>

    )
}

export default Home

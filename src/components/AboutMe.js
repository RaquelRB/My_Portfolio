import React from 'react'
import { Link } from "react-scroll";

export const AboutMe = () => {

    return (
        <div className="aboutme-container">
        <div className="container">
            
            <div className="row align-items-center justify-content-center">

                <div className="col">

                <h1>Hi, I'm <strong className="blue-font">Raquel Robles</strong>.</h1>
                <h2>Junior Web Developer</h2>

                    <p><i>My professional career has focused on the human resources sector, but I have always thought that I should have been a programmer. Since I was little I enjoyed <span className="underline-font">solving any problem</span> that appeared on my computer, browsing about things that I had no idea and wanting to <span className="underline-font">know more</span>.</i></p>

                    <p><i>I decided to <span className="underline-font">change</span> my course and bet everything on this new path, so I quit my job, signed up for the Ironhack web development bootcamp and my next goal is to find a job in which to continue <span className="underline-font">learning</span>, contributing my great motivation and <span className="underline-font">passion</span> for this world.</i></p>

                </div>

                <div className="col">
                    <img src="images/profilePhoto.jpg" className="rounded-circle" alt="Profile"/>
                </div>

                <Link
                      activeClass="active"
                      to="sectionExperience"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={100}
                  ><button className="scroll-button">Discover</button></Link>

            <img src="images/vertical-line.png" id="line" alt="Vertical line"/>

            </div>
        </div>
        </div>
    )
}

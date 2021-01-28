import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export const Experience = () => {
    return (
        <div className="experience-container" id="sectionExperience">
            <div>
                <div className="row align-items-center justify-content-center">

                    <div className="col-12 col-md-6 textTools-div">
                        <h2 className="underline-font"> Web Developer Bootcamp by Ironhack </h2>
                        <p>An intensive program of more than 400 hours from October 2020 to December 2020.</p>

                        <ul className="white-font">
                            <li>HTML5, CSS3 & Responsive Web Design</li>
                            <li>Fundamentals of Object-oriented programming based on JavaScript</li>
                            <li>Git + GitHub for Version Control</li>
                            <li>Web Development Frameworks (Express-backend, React-frontend)</li>
                            <li>Relational databases and ODMs</li>
                            <li>Integration of 3rd party services (APIs)</li>
                            <li>Write clean, modular and efficent code and develop well-tested applications using TDD (Test Driven Development) principles</li>
                            <li>Servers & Hosting</li>
                            <li>Agile Tools & Methodologies</li>
                        </ul>

                    </div>

                    <div className="col-12 col-md-6 iconTools-div">
                        <div className=" tools-container col-12">
                            <img src="images/html5-logo.svg" />
                            <img src="images/css3-logo.svg" />
                            <img src="images/bootstrap-logo.svg" />
                            <img src="images/bulma-logo.svg" />
                            <img src="images/handlebars-logo.png" />
                            <img src="images/react-logo.svg" />

                            <img src="images/JS-logo.svg" />
                            <img src="images/nodejs-logo.svg" />
                            <img src="images/express-logo.svg" />
                            <img src="images/mongodb-logo.svg" />
                            <img src="images/postman-logo.svg" />

                            <img src="images/git-logo.png" />
                            <img src="images/github-logo.png" />

                            <img src="images/heroku-logo.svg" />
                            <img src="images/netlifylogo.svg" />
                        </div>
                        <Link
                      activeClass="active"
                      to="sectionProjects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={100}
                  ><button className="scroll-button">See in practice</button></Link>
                    </div>
                    
                </div>
                
            </div>
            
                  
        </div>
    )
}

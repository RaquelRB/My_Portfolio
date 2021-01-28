import React from 'react'
import { Link } from "react-scroll";

export const Experience = () => {
    return (
        <div className="experience-container" id="sectionExperience">
            <div>
                <div className="row align-items-center justify-content-center">

                    <div className="col-12 col-md-6 textTools-div">
                        <h2 className="underline-font"> Web Developer Bootcamp by Ironhack </h2>
                        <p>An intensive program of more than 400 hours from October 2020 to December 2020.</p>

                        <ul>
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
                            <img src="images/html5-logo.svg" alt="html5 logo"/>
                            <img src="images/css3-logo.svg" alt="css3 logo"/>
                            <img src="images/bootstrap-logo.svg" alt="bootstrap logo"/>
                            <img src="images/bulma-logo.svg" alt="bulma logo"/>
                            <img src="images/handlebars-logo.png" alt="hbs logo"/>
                            <img src="images/react-logo.svg" alt="react logo"/>

                            <img src="images/JS-logo.svg" alt="js logo"/>
                            <img src="images/nodejs-logo.svg" alt="nodejs logo"/>
                            <img src="images/express-logo.svg" alt="express logo"/>
                            <img src="images/mongodb-logo.svg" alt="mongodb logo"/>
                            <img src="images/postman-logo.svg" alt="postman logo"/>

                            <img src="images/git-logo.png" alt="git logo"/>
                            <img src="images/github-logo.png" alt="github logo"/>

                            <img src="images/heroku-logo.svg" alt="heroku logo"/>
                            <img src="images/netlifylogo.svg" alt="netlify logo"/>
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

import React from 'react'

export const Projects = () => {
    return (
        <div className="projects-container" id="sectionProjects">
            <div className="container" >
                <h2>MY PROJECTS</h2>

                <div className="container">
                    <div className="card mb-3">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 project-div">
                                <div className="card-body">
                                <h5 className="text-center"><b>CRAZY CROSSING</b></h5>
                                <hr/>
                                <p>Crazy-crossing is a game that consists of moving a character from one point of the screen to another, avoiding the obstacles on the way</p>
                                <p><strong>Technologies:</strong> It created in a canvas context with JavaScript, and visualized from HTML, CSS and handling of the DOM</p>

                                <p><strong>Requirements:</strong> Only for PC (Chrome or firefox).</p>
                                <div className="card-buttons">
                                <a href="https://raquelrb.github.io/Crazy-crossing/" target="_blank" rel="noreferrer" className="btn btn-secondary live-button">See live <img src="images/seelive.png" alt="See live"/></a>
                                <a href="https://github.com/RaquelRB/Crazy-crossing" target="_blank" rel="noreferrer" className="btn btn-secondary code-button">See code <img src="images/coding-icon.jpg" alt="Coding icon"/></a>
</div>
</div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <img src="images/crazy-crossing1.png" className="card-img" alt="crazy crossing"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card mb-3">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 project-div">
                            <div className="card-body">
                                <h5 className="text-center"><b>MY GEEK BOARD</b></h5>
                                <hr/>
                                <p>My Geek Board allows you to create your own board game list and keep track of the plays</p>
                                <p><strong>Technologies:</strong> JavasCript, API Rest, NodeJs, ExpressJs, HBS and Bootstrap, Mongoose</p>

                                <p><strong>Requirements:</strong> There are no requirements.</p>
                                <div className="card-buttons">
                                <a href="https://project-my-geek-board.herokuapp.com/" className="btn btn-secondary live-button" rel="noreferrer" target="_blank">See live <img src="images/seelive.png" alt="See live"/></a>
                                <a href="https://github.com/RaquelRB/Project-My-Board-Games" className="btn btn-secondary code-button" rel="noreferrer" target="_blank">See code <img src="images/coding-icon.jpg" alt="Coding icon"/></a>
</div>
                            </div></div>

                            <div className="col-sm-12 col-md-6">
                                <img src="images/geekboard1.png" className="card-img" alt="geekboard"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="card mb-3">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 project-div">
                            <div className="card-body">
                                <h5 className="text-center"><b>BOOK EXCHANGE</b></h5>
                                <hr/>
                                <p>Bookexchange is a web application created to exchange books with other users. The user can upload books to the page so that other users can add the books of interest to their wish lists.</p>
                                <p><strong>Technologies:</strong> ReactJs, styled with CSS and bootstrap, NodeJs, ExpressJs, Mongoose.</p>

                                <p><strong>Requirements:</strong> Not available for some versions of Iphone.</p>
                                <div className="card-buttons">
                                <a href="https://bookexchangeweb.netlify.app/" className="btn btn-secondary live-button" rel="noreferrer" target="_blank">See live <img src="images/seelive.png" alt="See live"/> </a>
                                <a href="https://github.com/ProjectBookExchange/Project_Book_Exchange_Frontend" className="btn btn-secondary code-button" target="_blank" rel="noreferrer">See code <img src="images/coding-icon.jpg" alt="Coding icon"/></a>
</div>
                            </div>
</div>
                            <div className="col-sm-12 col-md-6">
                                <img src="images/bookexchange1.png" className="card-img" alt="bookexchange"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card mb-3">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 project-div">
                            <div className="card-body">
                                <h5 className="text-center"><b>MABA WEB</b></h5>
                                <hr/>
                                <p className="working-on"> Not finished yet. Working on it. 💪</p>
                                <p>MABA is a website that offers interior design services.</p>
                                <p><strong>Technologies:</strong> ReactJs, styled with CSS and bootstrap, NodeJs, ExpressJs</p>

                                <p><strong>Requirements:</strong> There are no requirements.</p>
                                <div className="card-buttons">
                                <a href="https://maba.netlify.app" className="btn btn-secondary live-button" rel="noreferrer" target="_blank">See live <img src="images/seelive.png" alt="See live"/> </a>
                                <a href="https://github.com/RaquelRB/Project_MABA" className="btn btn-secondary code-button" target="_blank" rel="noreferrer">See code <img src="images/coding-icon.jpg" alt="Coding icon"/></a>
</div>
                            </div>
</div>
                            <div className="col-sm-12 col-md-6">
                                <img src="images/maba-project.PNG" className="card-img" alt="MABA project"/>
                            </div>
                        </div>
                    </div>
                </div>
<br/>


            </div>
        </div>
    )
}

import React from 'react'
import { Link } from "react-router-dom";

export const Contact = () => {

    const ButtonMailto = ({ mailto, label }) => {
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    };


    return (
        <footer className="text-muted">
            <div className="container">
                <p className="mb-1">For more information you can write to me at <ButtonMailto label="raquelrobles95@gmail.com" mailto="mailto:raquelrobles95@gmail.com" /> and download <a href="docs\CV_RaquelRobles - ENG.pdf" download="RaquelRoblesCV">my CV here</a>.</p>
                <a href="https://www.linkedin.com/in/raquelroblesbonilla/" target="_blank" rel="noreferrer"><img src="images/linkedin-logo.png" alt="Linkedin logo"/></a>
                <a href="https://github.com/RaquelRB" target="_blank" rel="noreferrer"><img src="images/github-footer.png" alt="GitHub logo"/></a>
            </div>
        </footer>
    )
}

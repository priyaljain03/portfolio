import React from 'react';
import '../css/ProjectItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FaFolder, FaAngleDoubleUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectItem(props) {
    const { title, technologies, description,github,weblink } = props

    return (
        <div className="projectItem__card" >
            <div className="card__header">
                <h4>{title}</h4>
                <div className="icons">
                        {github?<a className="icon" href={github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>:""}
                        {weblink?<a className="icon" href={weblink} target="_blank"><FiArrowUpRight /></a>:""}
                </div>
            </div>
            <div className="card__body">
                {description}
            </div>
            <div className="card__footer">
            <div className="technology__list">
                        <ul>
                            {technologies.map((tech) => {
                                return <li>{tech} |</li>
                            })}
                        </ul>
                    </div>
                   
            </div>
        </div>
    )

}

export default ProjectItem;

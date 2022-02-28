import React from 'react';
import './ProjectItem'
import '../css/Project.css'
import ProjectItem from './ProjectItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Project() {
    return (
        <div id="projects" className="projects__wrapper">
            <h1>Some Things i've Built</h1>
            <div className="projects__container">
            <ProjectItem github="https://github.com/priyaljain03/netflixclone-application-frontend" weblink="https://netflixclone-application.herokuapp.com/" technologies={["React JS","Django","Python","Html","Css"]} title="Netflix Clone" description="A Simplified clone of Netflix. It was created with ReactJS ,Django and MovieDB API on some parts of the Application. Checkout my Netflix Frontend blog on this Here "/>
            <ProjectItem github="https://github.com/priyaljain03/SnapTab" weblink="https://chrome.google.com/webstore/detail/snaptab/nmohjlphophgcpobmmdlghgipmpjcbfi" technologies={["JS","Html","CSS"]} title="SnapTab" description="A Simple Chrome Extension that captures all the currently opened URLs and stores them at one place with Timestamp. User is Access all these urls at one page . Also user can open all the urls by just clikcing on one Button "/>
            <ProjectItem github="https://github.com/priyaljain03/Indian-Shatabdi" weblink="" technologies={["React JS","News API","Html","CSS"]} title="Indian Shatabdi" description="Web Application project for getting daily news headlines on categories like sports, business ,entertainment etc. It uses News API to fetch daily News headlines."/>
            <ProjectItem github="https://github.com/priyaljain03/portfolio" weblink="http://priyaljain.tech/" technologies={["React JS","Html","CSS"]} title="Portfolio" description="My personal website . Designed and developed in a way to avoid use of frameworks like Bootstrap."/>
            <ProjectItem github="https://github.com/priyaljain03/Review" weblink="https://reviewstar.herokuapp.com/" technologies={["Django",,"Python","JS","Html","CSS"]} title="Review - Gumroad" description="A Solution to the problem provided by GumRoad in an attempt to learn Web development using django and JS alone."/>
            <ProjectItem github="" weblink="" technologies={["JS","Html","CSS"]} title="Monster Art" description="A Simple Art Created using Html and Css . Used some animations in an attempt "/>
            </div>
        </div>
    )
}

export default Project;

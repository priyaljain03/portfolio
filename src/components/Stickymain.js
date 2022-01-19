import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import '../css/stickymain.css'

function Stickymain() {
    return (
        <div className="sticky__wrapper" >
            <div><a className="sticky-mail">jainpriyal03@gmail.com-----------</a></div>
            <div className="sticky__icons">
                <a href="https://github.com/priyaljain03"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/priyal.jain.5686/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/PriyalJ5686"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.linkedin.com/in/priyal-jain-441174186/"><FontAwesomeIcon icon={faLinkedinIn} /></a>-----------</div>
        </div >
    )
}

export default Stickymain
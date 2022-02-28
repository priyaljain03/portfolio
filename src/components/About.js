import React, { useState, useEffect } from 'react'
import '../css/About.css'

function About() {
    useEffect(() => {
        document.getElementById('about').classList.add('animate')
    })

    return (
        <div id="about" class="container ">
            <div className="about__content">
                <div className="about__content__header">
                    <div className="about__image">
                        <img src="ME.jpeg" />
                    </div>
                    <div class="content_text" >
                        <h1>About Me</h1>
                        <div className="content_body">
                            <p style={{ marginTop: '0px' }}>Hello! My name is Priyal and I enjoy creating things for Internet. My Interest in web development started back in 2018 when I decided to try creating a few websites for my college projects which taught me a lot about development in Ruby and HTML /  CSS!</p>
                            <p>As of today, I’ve had worked at a Company as a <span style={{color:'yellowgreen'}}>Python</span> and <span style={{color:'yellowgreen'}}>Salesforce Developer</span>. My main focus these days is learning to build Web based Applications using ReactJS and Django as major technologies.</p>
                            <p>Here are a few technologies I’ve been working with recently:<br />
                                JavaScript(ES6+)<br />
                                React<br />
                                Django<br />
                                Python<br />
                                HTML/CSS<br />
                                Salesforce - Apex, Lightning Components , VF pages etc.<br />
                                </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
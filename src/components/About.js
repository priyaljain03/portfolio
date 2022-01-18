import React, { useState, useEffect } from 'react'
import '../css/About.css'

function About() {
    const [isvisible, setVisible] = useState(false)
    useEffect(() => {
        document.getElementById('about').classList.add('animate')
    })
    return (

        <div id="about" class="container ">

            <div className="about__content">

                <div className="about__content__header">
                    <div className="about__image">
                        <img src="me6.png" />
                    </div>
                    <div class="content_text" style={{ marginLeft: '70px', marginTop: '0px' }}>
                        <h1>About Me</h1>
                        <p style={{ marginTop: '0px' }}>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                        <p>Here are a few technologies I’ve been working with recently:


                            JavaScript (ES6+)
                            TypeScript
                            React
                            Eleventy
                            Node.js
                            WordPress</p>
                    </div>

                </div>



            </div>


        </div >
    )
}

export default About

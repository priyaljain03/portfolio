import React from 'react'
import '../css/Navbar.css'

function Navbar() {

    return (
        <div className={`navbar  `}>
            <span className="logo">P</span>
            <ul >
                <li><a href="/" className="active">Home</a></li>
                <li ><a href="#about">About</a></li>
                <li>Work</li>

                <li><a href="#blogs">Blogs</a></li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}

export default Navbar

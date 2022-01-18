import React from 'react'
import '../css/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <span className="logo">P</span>
            <ul >
                <li><a>Home</a></li>
                <li>About</li>
                <li>Work</li>
                <li>Blogs</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

    )
}

export default Navbar

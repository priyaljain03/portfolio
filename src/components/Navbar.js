import React, { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {

    return (
        <div className="navbar">
            <span className="logo">P</span>
            <ul >
                <li ><a href="/" >Home</a></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#experience">Experience</a></li>
                <li ><a href="#projects">Projects</a></li>
                <li ><a href="#blogs">Blogs</a></li>
                <li ><a href="#contact">Contact</a></li>
            </ul>
        </div >

    )
}

export default Navbar

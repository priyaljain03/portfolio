import React, { useState } from 'react'
import '../css/Navbar.css';
import { ImMenu } from "react-icons/im";

function Navbar() {
    const [openMenu,setopenMenu] = useState(false);

    const handleMenu = ()=>{
        if(openMenu===false){
            setopenMenu(true)
        }else{
            setopenMenu(false)
        }
    }

    return (
        <>
        <div className="navbar">
            <span className="logo">P</span>
            <nav>
            <ul>
                <li><a href="/" ><span style={{color:"yellowgreen"}}>01. </span>Home</a></li>
                <li><a href="#about"><span style={{color:"yellowgreen"}}>02. </span>About</a></li>
                <li ><a href="#experience"><span style={{color:"yellowgreen"}}>03. </span>Experience</a></li>
                <li ><a href="#projects"><span style={{color:"yellowgreen"}}>04. </span>Projects</a></li>
                <li ><a href="#contact"><span style={{color:"yellowgreen"}}>05. </span>Contact</a></li>
            </ul>
            </nav>
           
            <div className="hamburger-icon">
                <ImMenu style={{color:"white"}} onClick={handleMenu}/>
            </div>
        </div >
        {openMenu===true?<ul className="mobile-menu">
                    <li><a href="/" >Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li ><a href="#experience">Experience</a></li>
                    <li ><a href="#projects">Projects</a></li>
                    <li ><a href="#contact">Contact</a></li>
                </ul>:""}
        </>

    )
}

export default Navbar

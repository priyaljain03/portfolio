import React, { useEffect } from 'react'
import '../css/Home.css'

function Home() {
    return (
        <div className="home__wrapper">
            <h1>Priyal Jain.</h1>
            <h2 >I love building for web</h2>
            <p>I’m a software engineer who likes making fun,interactive things with code. I also like to write about what i created . Currently, I’m focused on Learning to build More interactive Web based Applications Using <span style={{color:"yellowgreen",opacity:1}}>ReactJS</span> / <span style={{color:"yellowgreen",opacity:1}}>Django</span>/ <span style={{color:"yellowgreen",opacity:1}}>CSS</span> /<span style={{color:"yellowgreen",opacity:1}}>Html</span>.</p>
            <button className="resume__btn" onClick={()=>window.open(`https://drive.google.com/file/d/15ehhcj7oT8iYtBcZm3aLCxfyHnMzoyWx/view?usp=sharing`,'_blank')}>View Resume</button>
        </div>
    )
}

export default Home
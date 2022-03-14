import React from 'react'
import '../css/Footer.css'
import { AiFillHeart } from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
        Built with <AiFillHeart style={{color:"red"}}/> by <span>Priyal Jain</span>
    </div>
  )
}

export default Footer
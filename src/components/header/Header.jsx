import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic (1).png'
import HeaderSocial from './HeaderSocial'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Header = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 
            'React Developer',
            'Software Devloper',
            'Completed C++ With DSA'],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80
  })
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sandeep Mahawar</h1>
            <h4 className='text-light'>
               I'm a {' '}
               {text}
               <span><Cursor cursorStyle="|"/></span>
            </h4>
            <CTA/>
            <HeaderSocial/> 

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>


    </header>
  )
}

export default Header
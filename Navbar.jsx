import React from 'react'

function Navbar() {
  return (
    <div className='navContainer'>
      <div id='rubixeLogo'>
        <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="Rubixe Logo"></img>
      </div>
      <ul id='navMenuLists'>
        <li className='navMenu'>HOME</li>
        <li className='navMenu'>SERVICES</li>
        <li className='navMenu'>PRODUCTS</li>
        <li className='navMenu'>AI INTERNSHIPS</li>
        <li className='navMenu'>CAREER</li>
        <li className='navMenu'>BLOG</li>
        <li className='navMenu'>ABOUT</li>
        <li className='navMenu'>CONTACTUS</li>
      </ul>
    </div>
  )
}

export default Navbar
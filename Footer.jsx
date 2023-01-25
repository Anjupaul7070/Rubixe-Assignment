import React from 'react'

function Footer() {
  return (
    <div id='fooContainer'>
      <div id='fooTopSection'>
        <div className='fooAboutUs'>
          <h5>
            ABOUT US
          </h5>
          <p>
            Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.
          </p>
        </div>
        <div className='fooMenus'>
          <h5>MENUS</h5>
          <ul className='fooLists'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div className='fooLearnMore'>
          <h5>LEARN MORE</h5>
          <ul className='fooLists'>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className='fooAddress'>
          <h5>ADDRESS</h5>
          <p>
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
            <br />
            Phone: 0804-717-8999
            <br />
            Email: hi@rubixe.com
          </p>
          <h5>SOCIAL MEDIA</h5>
          <div className='socialIcons'>
            <div>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
      <div id='fooBottomSection'>
        <p>© Copyright 2017 - 2023   |   Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD.   |   All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'

function Boxfive() {
  return (
    <div id='fifthcontainer'>
      <div className='touch'>
        <div>GET IN TOUCH</div>
        <p>Please Register the form after we will contact you soon</p>
      </div>
      <div className='line'></div>
      <div className='boxform'>
        <form action="" id='formpage'>
          <div className='form'>
            <label htmlFor="name">Name <sup>*</sup></label>
            <input type="text" name="name" id="name" placeholder='Please Write Your Name' />
          </div>
          <div className='form'>
            <label htmlFor="name">Email <sup>*</sup></label>
            <input type="email" name="email" id="email" placeholder='Please Write Your Email' />
          </div>
          <div className='form'>
            <label htmlFor="name">Mobile Number <sup>*</sup></label>
            <input type="text" name="mobile" id="mobile" placeholder='Please Write Your Mobile Number' />
          </div>
          <button className='btn'>Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default Boxfive
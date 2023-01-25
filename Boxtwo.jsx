import React from 'react'
import aboutus from '../images/aboutus.jpg'

function Boxtwo() {
    return (
        <div id='twoContainer'>
            <div className='whoweare'>
                <h1>WHO WE ARE</h1><br />
                <p>
                    Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.
                </p><br />
                <p>
                    At Rubixe™, we make your business more efficient, more predictable and more effective, turning complex challenges into solutions by leveraging disruptive technologies, providing a strategic competitive advantage. We serve clients in most industries including Banking & Finance, Retail, e-commerce, healthcare, logistics et., We have the capability to deliver solutions to clients of all sizes across the globe.
                </p>
            </div>
            <div className='twoimage'>
                <div className='twoimagecont'>
                    <div className='pinkbox'></div>
                    {/* <img className='twoimg' src={aboutus} alt="" /> */}
                    <div className='greenbox'></div>
                </div>
            </div>
        </div>
    )
}

export default Boxtwo
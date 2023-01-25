import React from 'react'

function Boxfour() {
    return (
        <div className='containerfour'>
            <div className='fourthhead'>
                TECH FOR TEENS - A RUBIXE INITIATIVE
            </div>
            <div className='modals'>
                <div className='modalsone'>
                    <span className='numtype1'
                        style={{ color: 'blue' }}>01</span>
                    <div className='modalstop' style={{
                        height: '30px',
                        width: '100%',
                        backgroundColor: 'blue',
                        borderRadius: '10px 10px 0 0',
                        position:'absolute',
                        top:'0'
                    }}></div>
                    <div className='modelstyle' style={{ color: 'blue' }}>
                        <span><i class="fa-solid fa-microchip" ></i></span>
                        <p>Robotic Process Automation (RPA) is poised to impact more than 60% of the IT jobs in the next 5 years.</p>
                    </div>
                </div>
                <div className='modalstwo'>
                    <span className='numtype2'
                        style={{ color: '#f55973' }}>02</span>
                    <div className='modelstyle' style={{ color: '#f55973' }}>
                        <p>Rubixe team specializes in most popular RPA tools including BluePrism, UiPath, and Automation Anywhere.</p>
                        <span><i class="fa-solid fa-database" ></i></span>
                    </div>
                    <div className='modalstop' style={{
                        height: '30px',
                        width: '100%',
                        backgroundColor: '#f55973',
                        borderRadius: '0 0 10px 10px',
                        position: 'absolute',
                        bottom: '0'
                    }}></div>
                </div>
                <div className='modalsone'>
                    <span className='numtype1'
                        style={{ color: 'orange' }}>03</span>
                    <div className='modalstop' style={{
                        height: '30px',
                        width: '100%',
                        backgroundColor: 'orange',
                        borderRadius: '10px 10px 0 0',
                        position:'absolute',
                        top:'0'
                    }}></div>
                    <div className='modelstyle' style={{ color: 'orange' }}>
                        <span><i class="fa-solid fa-people-group"></i></span>
                        <p>Rubixe has not only in-house AI consulting for top industries but also deliver full-scale AI and Machine learning solutions.</p>
                    </div>
                </div>
                <div className='modalstwo'>
                    <span className='numtype2'
                        style={{ color: 'green' }}>04</span>
                    <div className='modelstyle' style={{ color: 'green' }}>
                        <p>Artificial Intelligence and Machine Learning  disrupting existing business models through predictive capabilities.</p>
                        <span><i class="fa-solid fa-network-wired"></i></span>
                    </div>
                    <div className='modalstop' style={{
                        height: '30px',
                        width: '100%',
                        backgroundColor: 'green',
                        borderRadius: '0 0 10px 10px',
                        position: 'absolute',
                        bottom: '0'
                    }}></div>
                </div>
                <div className='modalsone'>
                    <span className='numtype1'
                        style={{ color: '#f8c971' }}>05</span>
                    <div className='modalstop' style={{
                        height: '30px',
                        width: '100%',
                        backgroundColor: '#f8c971',
                        borderRadius: '10px 10px 0 0',
                        position:'absolute',
                        top:'0'
                    }}></div>
                    <div className='modelstyle' style={{ color: '#f8c971' }}>
                        <span><i class="fa-solid fa-computer"></i></span>
                        <p>IoT has a phenomenal potential as a technology in shaping every aspect of human life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxfour
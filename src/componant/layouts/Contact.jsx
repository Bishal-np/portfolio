import React from 'react'


function Contact() {
    return (
        <>

            <section className="contact" id='contact'>
                <h2 className='text-center pt-5 '> Let’s Talk!</h2>
                <p className=' text-center contact-p'>Have a question or want to work together? Feel free to reach out!</p>
                <div className="contact-card container">
                    <div className="contact-info">
                        <h3 className='text-center'>Contact info</h3>
                        <p className="location"><i className="fa-solid fa-location-dot">  </i>Phedikhola-5 Syangja, Nepal</p>
                        <p className="gmail"><i className="fa-solid fa-envelope"></i>bisyalb0998@gmail.com</p>
                        <p className="ph"><i className="fa-solid fa-phone"></i>+9779702831539</p>
                        <div className="follow-me">
                            <h3 className='text-center'>Follw Me</h3>
                            <ul className='d-flex gap-3 follow fs-3 justify-content-center align-items-center text-light'>
                                <li><a href="https://www.facebook.com/bishal.bisyal"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/bishal-nepali-107aa7332/"><i className="bi bi-linkedin"></i></a></li>
                                <li><a href="https://github.com/Bishal-np"><i className="bi bi-github"></i></a></li>
                                <li><a href=""><i className="bi bi-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <form action="" className="contact-form">
                        <input type="text" id="name" placeholder="  Full Name" required className="name" />
                        <input type="number" id='number' placeholder=' Phone Number' required className='number' />
                        <input type="email" id='email' placeholder=' Email Address ' required className='email' />                  
                        <div className="message">
                            <textarea name="message" id="message" className="message-area" placeholder="Type your message here"></textarea>
                        </div>
                        <button className="send-message">send message</button>
                    </form>
                </div>


            </section>
        </>
    )
}

export default Contact

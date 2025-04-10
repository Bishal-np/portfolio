import React from 'react'


function Contact() {
    return (
        <>

            <section className="contact">
                <h2 className='text-center py-5'> Let’s Talk!</h2>
                <div className="contact-card container">
                    <div className="contact-info">
                        <h3 className='text-center'>Contact info</h3>
                        <p className="location"><i className="fa-solid fa-location-dot">  </i>Phedikhola-5 Syangja, Nepal</p>
                        <p className="gmail"><i className="fa-solid fa-envelope"></i>bisyalb0998@gmail.com</p>
                        <p className="ph"><i className="fa-solid fa-phone"></i>+9779702831539</p>
                        <div className="follow-me">
                            <h3 className='text-center'>Follw Me</h3>
                            <ul className='d-flex gap-3 follow fs-3 justify-content-center align-items-center text-light'>
                                <li><a href=""><i class="bi bi-facebook"></i></a></li>
                                <li><a href=""><i class="bi bi-pinterest"></i></a></li>
                                <li><a href=""><i class="bi bi-linkedin"></i></a></li>
                                <li><a href=""><i class="bi bi-github"></i></a></li>
                                <li><a href=""><i class="bi bi-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <form action="" className="contact-form">
                        <p className="p-1">Name</p>
                        <input type="text" id="name" placeholder="Type Your Name" required className="name" />

                        <div className="phone-email d-flex align-items-center justify-content-between">
                            <div className="phone-number">
                                <p className="p-2">phone number</p>
                                <input type="number" id="number" required placeholder="Type your phone number" name="number" className="number" />
                            </div>
                            <div className="email-address">
                                <p className="p-3">Email</p>
                                <input type="emaiil" id="email" placeholder="Type your email address" required="email" className="email" />
                            </div>
                        </div>
                        <div className="message">
                            <p className="p-4"> your message</p>
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

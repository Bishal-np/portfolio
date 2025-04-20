import React from 'react';
import { 
  FaFacebook, FaLinkedin, FaGithub, FaWhatsapp,
  FaMapMarkerAlt, FaEnvelope, FaPhone 
} from 'react-icons/fa';
import "../../scss/pages/home.scss";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="contact" id='contact'>
      <h2 className='text-center pt-5'>Contact Me </h2>
      <p className='text-center contact-p'>
        Have a question or want to work together? Feel free to reach out!
      </p>
      
      <div className="contact-card container">
        <div className="contact-info">
         
          <p className="location">
            <FaMapMarkerAlt className="icon" /> 
            Phedikhola-5 Syangja, Nepal
          </p>
          <p className="gmail">
            <FaEnvelope className="icon" />
            bisyalb0998@gmail.com
          </p>
          <p className="ph">
            <FaPhone className="icon" />
            +977 9702831539
          </p>
          
          <div className="follow-me">
            <h3 className='text-center'>Follow Me</h3>
            <ul className='d-flex gap-3 follow fs-3 justify-content-center align-items-center text-light'>
              <li>
                <a href="https://www.facebook.com/bishal.bisyal" aria-label="Facebook">
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bishal-nepali-107aa7332/" aria-label="LinkedIn">
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Bishal-np" aria-label="GitHub">
                  <FaGithub className="icon" />
                </a>
              </li>
              <li>
              <a href="https://wa.me/96565957766" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className="icon" />
</a>
              </li>
            </ul>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              placeholder="Full Name" 
              required 
              className="name" 
            />
            <input 
              type="number" 
              id='number' 
              placeholder='Phone Number' 
              required 
              className='number' 
            />
            <input 
              type="email" 
              id='email' 
              placeholder='Email Address' 
              required 
              className='email' 
            />
            <div className="message">
              <textarea 
                name="message" 
                id="message" 
                className="message-area" 
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
          </div>
          
          <button type="submit" className="send-message">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
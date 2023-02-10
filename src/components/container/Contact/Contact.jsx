import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mbjegkqk");
  if (state.succeeded) {
      return alert("Thanks for joining!");
  }
  return (
    <div className="container" id="contact">
//       <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>I am so excited to work with you! I am looking forward to learning new skills, collaborating on projects, and growing together. I am confident that our partnership will be successful and rewarding. I am eager to get started and make a positive impact. I believe that our combined efforts will lead to great success. I can't wait to see what we can accomplish together!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons" >
                  {socialIcons.map((socialIcon, index) => {
                  return (
                      <div key={index} onClick={() => window.location.href = socialIcon.link}>
                          {socialIcon.icon}
                      </div>        
                  )
              })}
              </div>
        </motion.div>
      <form onSubmit={handleSubmit} >
      <motion.div
      initial={{x: 0, opacity: 0}}
                whileInView={{ x: [150,0], opacity: 1 }}
                 transition={{duration: 1}}
                 className="contact_right">
                  <h3>Get In Touch</h3>

      <div className="row">          
      {/* <h3>username</h3> */}
       <input
        id="name"
        type="text" 
        name="username"
        placeholder='Username'
        className="row"
      />
      </div>
      
      <label htmlFor="email">
      </label>
      <div className="row"> 
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />

      <ValidationError 
        prefix="Email" 
        field="email"
        className="row"
        errors={state.errors}
      />
      </div> 
   
      <div className="row" >
      <textarea
        id="message"
        name="message"
        className="row"
        placeholder='message'
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{duration: 0.3}}
           >
            <button type="submit" className="btn"  disabled={state.submitting}>Send
           </button>
           </motion.div>
        </motion.div>
    </form>
  </div>
</div>
  );
}
function App() {
  return (
    <Contact />
  );
}
export default Contact;

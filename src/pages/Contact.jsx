import React from "react";
import style from './Contact.module.css';
import {Link} from 'react-router-dom'

function Contact() {
  return (
  <div className={style.cmain}>


    <div className={style.h2}>
        <h2>Contact Us</h2>
    </div>

    <div className={style.form}>
      <span>Let's get in touch</span>
      <p className={style.p}>We're open for any suggestion or just to have a chat</p>
      
      <div className={style.left_section}>
      <div className={style.add}>
        <i className={`fa-sharp fa-solid fa-location-dot ${style.i1}`}></i><p>Address: 198 west  21th street,suite 721 New York NY10016</p>
      </div>

      <div className={style.phone}>
        <i className={`fa-sharp fa-solid fa-phone" ${style.i2}`}></i> <p>+646-833-7161</p>
      </div>

      <div className={style.email}>
        <i className={`fa-solid fa-envelope ${style.i3}`}></i><p>Email: yoursite@gmail.com</p>
      </div>

      <div className={style.site}>
        <i className={`fa-sharp fa-solid fa-globe ${style.i4}`}></i><p>Website: yoursite.com</p>
      </div>
      </div>

    </div>  


    <div className={style.in}>
    <span>Get in touch</span>
    <div className={style.right_section}>
    <div className={style.in1}>

      <div> 
      <p>Full Name</p><input type="Name" placeholder="Name" />
      </div> 
    
      <div>
      <p>E-Mail Address</p> <input type="email" placeholder="Email" />
      </div>
     </div> 
      <div className={style.in2}> 
      <p>Subject </p><input type="subject" placeholder="Subject" />
      </div>
      <div className={style.in3}>
      <p>Message</p><textarea>

      </textarea>
      </div>
      <div className={style.btn}>
        <button className={style.bt}> Send Message</button>
    </div>
    </div>

    
    </div>
    </div>
  )
}

export default Contact;
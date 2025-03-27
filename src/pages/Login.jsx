import React from 'react'
import style from './Login.module.css'
import log_banner from '/src/assets/logimg.png'

function Login(){
  
  return (
    <div className={style.log_body}>
     <div className={style.log_section}>
            <div className={style.log_img}>
                <img src={log_banner} alt="" />
            </div>

            <div className={style.log}>
                <h2 className={style.log_title}>Login</h2>

                <div className={style.input}>
                  <i className="fa-regular fa-envelope"></i><input type='email' placeholder='Email' className={style.input_log} name='email'  />
                  <i className="fa-solid fa-lock"></i> <input type='password' placeholder='Password' className={style.input_log} name='password' />
                </div>
                
                <div className={style.login_btn}>
                  <button>Login</button>
                </div>

            </div>
     </div>
     </div>
  )
}

export default Login
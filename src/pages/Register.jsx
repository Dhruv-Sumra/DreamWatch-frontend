import React from "react";
import style from "./Register.module.css";
import register from '/src/assets/regiter.webp'

const Register = () => {
  return (
    <div className={style.signup}>
      <div className={style.image}>
        <img src={register} alt="" />
      </div>

      <div className={style.rege}>
        <h1>CREATE ACCOUNT</h1>

        <div className={style.input}>
          <div className={style.inn}>
            <label htmlFor=""> YOUR NAME</label>
            <input type="text" name="name" id="name" placeholder="name" />
          </div>

          <div className={style.inn}>
            <label htmlFor=""> EMAIL</label>
            <input type="email" name="email" id="email" placeholder="email" />
          </div>

          <div className={style.inn}>
            <label htmlFor=""> CREATE PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>

          <div className={style.inn}>
            <label htmlFor=""> CONFIRM PASSWORD</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Conform password"
            />
          </div>

          <button className={style.button}>Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Register;

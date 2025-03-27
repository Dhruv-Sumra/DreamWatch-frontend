import React from "react";
import style from "./Popular.module.css";
import data from "/src/pages/json/popular.json";
import { Link } from "react-router-dom";

const Pop = () => {
  return (
    <div className={style.pop}>
      <div className={style.banner}>
        <img src="/src/pages/imgs/pop_banner.jpg" alt="" />
        <div className={style.explore}>
          <h2>Popular Watch collection is here</h2>
          <a href="#pop_sec">
            <button>Explore</button>
          </a>
        </div>
      </div>
      <div id="pop_sec">
        <div id={style.pop_section}>
          {data.map((record,index) => {
            return (
              <div key={record.id} className={style.pop_watches} >
                <div className={style.img}>
                  <img src={record.img} alt="" />
                </div>
                <div className={style.info}>
                  <h2>{record.name}</h2>
                  <p className={style.price}>Price : {record.price}</p>


    
                    <button className={style.buy}>Buy</button>

                  <button className={style.cart}>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pop;

import React from "react";
import style from "./Recent.module.css";
import data from "/src/pages/json/recent.json";
import recent from "/src/assets/recent.jpg"

const Recent = () => {
  return (
    <div className={style.pop}>
      <div className={style.banner}>
        <img src={recent} alt="Recently Launched Watches Banner" />
        <div className={style.explore}>
          <h2>Recently Launched Watches Are Here</h2>
          <a href="#pop_sec">
            <button>Explore</button>
          </a>
        </div>
      </div>

      <div id="pop_sec">
        <div id={style.pop_section}>
          {data.map((record) => (
            <div className={style.pop_watches} key={record.id}>
              <div className={style.img}>
                <img src={record.img} alt={`Image of ${record.name}`} />
              </div>


              <div className={style.info}>
                <h2>{record.name}</h2>
                <p className={style.price}>Price: {record.price}</p>
                

                  <button className={style.buy}>Buy</button>

                <button className={style.cart}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
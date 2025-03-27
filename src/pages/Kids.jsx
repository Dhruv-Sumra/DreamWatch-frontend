import style from "./Kids.module.css";
import data from "/src/pages/json/kids.json";
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <div className={style.kids}>
      <div className={style.banner}>
        <img src="/src/pages/imgs/banner5.jpg" alt="" />
        <div className={style.explore}>
          <h2>Best {"Kid's"} Watch collection is here</h2>
          <a href="#kids_sec">
            <button>Explore</button>
          </a>
        </div>
      </div>
      <div id="kids_sec">
        <div id={style.kids_section}>
          {data.map((record) => {
            return (
              <div className={style.kids_watches} key={record.id}>
                <div className={style.img}>
                  <img src={record.img} alt="" />
                </div>
                <div className={style.info}>
                  <h2>{record.name}</h2>
                  {/* <p className={style.meta}>{record.meta}</p> */}
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

export default Kids;

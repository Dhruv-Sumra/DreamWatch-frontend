import React from "react";
import style from "./Brand.module.css";
import data from "/src/pages/json/brand.json";
import brand from "/src/assets/brand_banner.jpg"

const Brand = () => {
  return (
    <div className={style.brand}>
      <div className={style.b_banner}>
        <img src={brand} alt="" />
        <div className={style.brands}>
          {data.map((record) => {
            return (
              <div className={style.imgs} key={record.id}>
                <a target="_blank" href={record.link}>
                  <img src={record.img} alt=""></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;

import style from "./Men.module.css";
import data from "/src/pages/json/men.json";
import men from "/src/assets/banner2.webp"

const Men = () => {
  return (
    <div className={style.men}>
      <div className={style.banner}>
        <img src={men} alt="" />
        <div className={style.explore}>
          <h2>Best {"Men's"} Watch collection is here</h2>
          <a href="#men_sec">
            <button>Explore</button>
          </a>
        </div>
      </div>
      <div id="men_sec">
        <div id={style.men_section}>
          {data.map((record) => {
            return (
              <div className={style.men_watches} key={record.id}>
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

export default Men;

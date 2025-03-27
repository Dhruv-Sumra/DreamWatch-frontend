import React from 'react';
import style from './popular.module.css';
import database from './watches.json';
import { Link } from 'react-router-dom';

function Popular() {
    return (
        <div className={style.popular_section}>
            <Link to="popular">
                <h3 className={style.popular_title}>
                    Popular Watches &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </h3>
            </Link>

            <div className={style.popular_watch_cards}>
                {database.map((data) => (
                    <div className={style.popular_cards} key={data.id}>
                        <Link to="popular">
                            <img src={data.img} alt={data.name} className={style.watch_image} />
                        </Link>
                        
                        <div className={style.meta_data}>
                            <p className={style.watch_name}>{data.name}</p>
                            <p className={style.meta_info}>{data.meta}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Popular;
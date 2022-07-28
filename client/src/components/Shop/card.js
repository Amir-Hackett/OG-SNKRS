import React from 'react';
import './Shop.css';

export default function Card(props) {
    return (
        <div className="container" >
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <h3 className="card-title">{props.subname}</h3>
                <div className="card-img">
                    <img src={props.img} alt="shoe-img" />
                </div>
                <p className="card-text">Release Date: {props.release}</p>
                <p className="card-text">Retail Price: {props.retail}</p>
                <div className="shop-btn">
                    {props.goat === "" ? (
                        null
                    ) : (
                        <a href={props.goat} target="_blank" className='shop-store'>GOAT</a>
                    )}

                    {props.stockx === "" ? (
                        null
                    ) : (
                        <a href={props.stockx} target="_blank" className='shop-store'>StockX</a>
                    )}

                    {props.stadium === "" ? (
                        null
                    ) : (
                        <a href={props.stadium} target="_blank" className='shop-store'>Stadium Goods</a>
                    )}

                    {props.flight === "" ? (
                        null
                    ) : (
                        <a href={props.flight} target="_blank" className='shop-store'>Flight Club</a>
                    )}
                </div>
            </div>
        </div>
    )
}
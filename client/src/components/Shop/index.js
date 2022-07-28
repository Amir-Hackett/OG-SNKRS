import React from "react";
import Card from "./card";
import { shoes } from './indexData';
import './Shop.css';

function Shop() {
    return (
        // <div className="search">
        //     <form className="search-form">
        //         <input type="text" placeholder="i.e. Nike" />
        //         <input type="submit" value="Search" />
        //     </form>
        // </div>
        <div className="cards-item">
            <h1 className="card-box-title">Latest Releases</h1>
            <div className="card-box">
                {
                    shoes.map(shoe => {
                        return (<Card name={shoe.name} subname={shoe.subname} img={shoe.img} release={shoe.release} retail={shoe.retail} goat={shoe.goat} stockx={shoe.stockx} stadium={shoe.stadium} flight={shoe.flight} />)
                    })
                }
            </div>
        </div>
    )
}

export default Shop;
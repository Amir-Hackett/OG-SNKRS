import React from "react";
import './Shop.css';

function Shop() {
    return (
        <div class="search">
            <form class="search-form">
                <input type="text" placeholder="i.e. Nike" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Shop;
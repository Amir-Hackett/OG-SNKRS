import React from "react";
import './SignUp.css';

function SignUp() {
    return (
        <div className="search">
            <form className="search-form">
                <input type="text" placeholder="i.e. Adidas" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SignUp;
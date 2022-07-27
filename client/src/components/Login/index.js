import React from "react";
import './Login.css';

function Login() {
    return (
        <div className="search">
            <form className="search-form">
                <input type="text" placeholder="i.e. NIKE" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Login;
import React from 'react';
import logo from '../../assets/images/nike_sneakers-brandlogo.net.png';


function Home() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Can you kick it?</p>
        </header>
    </div>
    )
};

export default Home;
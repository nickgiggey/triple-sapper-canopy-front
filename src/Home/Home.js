import React from 'react';
import Body from './Body';
import Header from './Header';
import '../Utilities/reset.css'

function Home() {
    return (
        <div className="home-container">
            <Header />
            <Body />
        </div>
    );
}

export default Home;
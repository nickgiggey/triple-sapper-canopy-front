import React from 'react';
import Header from './Header';
import Body from './Body';
import '../Utilities/reset.css'
import './HomeContainer.css'

function Home() {
    return (
        <div className="home-container">
            <Header />
            <Body />
        </div>
    );
}

export default Home;
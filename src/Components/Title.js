import React from 'react';
import './Title.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Title">
            <header>
                <Link to="/">  <h1>Pic some</h1></Link>
            </header>
        </div>
    )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Brewed Awakenings</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </header>
    );
};

export default Header;
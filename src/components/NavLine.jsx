import React, { useEffect, useRef } from 'react';
import { FaSearch, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const NavLine = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // === Shared Search Logic ===
    const handleSearch = () => {
        const value = inputRef.current.value.trim().toLowerCase();

        const routes = {
            shop: '/shop',
            summer: '/summer',
            'summer collection': '/summer',
            winter: '/winter',
            'winter collection': '/winter',
            gents: '/gents',
            party: '/party',
            'party wears': '/party',
            'home decor': '/homedecor',
            decor: '/homedecor'
        };

        if (routes[value]) {
            navigate(routes[value]);
            inputRef.current.value = ''; // Clear input
        } else {
            alert('Page not found for the entered keyword.');
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        };

        const input = inputRef.current;
        input.addEventListener('keypress', handleKeyPress);
        return () => input.removeEventListener('keypress', handleKeyPress);
    }, [navigate]);

    return (
        <div className='navline'>
            {/* Search bar */}
            <div className='search'>
                <input
                    ref={inputRef}
                    name='search'
                    type='text'
                    placeholder='Search...'
                />
                {/* Make icon clickable */}
                <FaSearch onClick={handleSearch} style={{ cursor: 'pointer' }} />
            </div>

            {/* Social Media icons */}
            <div className='Sicons'>
                <span>
                    <a href="https://www.gracereplicastore.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="mailto:minahil@purelogics.net" target="_blank" rel="noopener noreferrer"><IoMail /></a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                </span>
            </div>

            {/* Login button */}
            <Link to="/login" className='login login-route'>Login</Link>
        </div>
    );
};

export default NavLine;

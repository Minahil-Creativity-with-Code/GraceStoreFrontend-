import React, { useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const NavLine = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();  //For removing data after execution

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                const value = inputRef.current.value.trim().toLowerCase();

                // Define keyword-to-path mapping
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
                }
                //For not registered keywords
                else {
                    alert('Page not found for the entered keyword.');
                }
            }
        };
    // For search bar on top 
        const input = inputRef.current;
        input.addEventListener('keypress', handleKeyPress);

        return () => input.removeEventListener('keypress', handleKeyPress);
    }, [navigate]);

    return (
        <>
            {/* Search bar */}
            <div className='navline'>
                <div className='search'>
                    <input ref={inputRef} name='search' type='text' placeholder='Search...' />
                    <FaSearch />
                </div>

                {/* Social Media icons */}
                <div className='Sicons'>
                    <span>
                    {/* Random Links  */}
                        <a href="https://www.gracereplicastore.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="mailto:minahil@purelogics.net" target="_blank" rel="noopener noreferrer">
                            <IoMail />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <FaPinterest />
                        </a>
                    </span>
                </div>

                {/* Login button */}
                <Link to="/login" className='login login-route'>Login</Link>
            </div>
        </>
    );
};

export default NavLine;

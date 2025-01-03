import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
    const cartItemsCount = 5; // Hardcoded number of items in the cart for now

    return (
        <header className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center">
            {/* Brand Name */}
            <Link to="/" className="text-2xl font-bold">
                ShoppingKart
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative flex items-center">
            <ShoppingCartIcon style={{ fontSize: 50 }} /> 
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                </span>
            </Link>
        </header>
    );
};

export default Header;

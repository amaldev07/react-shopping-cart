import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products') // Example API
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="p-4 border rounded shadow">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 object-contain"
                    />
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-700">${product.price}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;

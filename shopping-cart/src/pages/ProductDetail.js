import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const ProductDetail = () => {
    const { productId } = useParams(); // Get the product ID from the route
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [productId]);

    if (loading) {
        return <Loader />;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                className="w-64 h-64 object-contain my-4"
            />
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="text-xl font-semibold my-4">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;

import React from 'react';

const CartPage = () => {
    // Hard-coded cart items
    const cartItems = [
        { id: 1, title: 'Product 1', price: 29.99, quantity: 2 },
        { id: 2, title: 'Product 2', price: 49.99, quantity: 1 },
        { id: 3, title: 'Product 3', price: 19.99, quantity: 3 },
    ];

    // Calculate the total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {/* Check if the cart is empty */}
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {/* Display cart items */}
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 border rounded shadow flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-700">
                                        Price: ${item.price.toFixed(2)}
                                    </p>
                                    <p className="text-gray-700">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <p className="text-xl font-bold">
                                    ${item.price * item.quantity}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Total Price */}
                    <div className="mt-6 p-4 border-t-2">
                        <h2 className="text-xl font-bold">
                            Total: ${totalPrice.toFixed(2)}
                        </h2>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;

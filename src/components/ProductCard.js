import React, { useState } from 'react';

const ProductCard = ({ name, price, description, imageUrl, onQuantityChange }) => {
    const [title, setTitle] = useState(name);
    const [fontSize, setFontSize] = useState(16);
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (e) => {
        if (e.target.value < 0) {
            setQuantity(0);
            onQuantityChange(0, name);
            return;
        }
        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity, name);
    };

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-4 my-2 bg-white border-2 border-blue-600">
            <div className="flex items-center justify-center">
                <img src={imageUrl} alt={name} className="w-40 h-40 object-cover mb-4" />
            </div>


            <div className='flex justify-center'>
                <p className='text-xs pb-2 text-gray-400'>
                    Change title here:
                </p>
            </div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => {
                    if (title === "") {
                        setTitle(name);
                    }
                }}
                className="w-full mb-2 p-2 border rounded"
            />
            <div className="flex justify-center mt-2">
                <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-1/2"
                />
            </div>
            <div className='flex justify-center'>
                <p className='text-xs pt-2 text-gray-400'>
                    Change title font size
                </p>
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-lg p-2" style={{ fontSize: `${fontSize}px` }}>
                    {title}
                </div>
                <div className="flex justify-between p-4">
                    <p className="text-green-700 font-bold text-lg my-2">
                        ${price}
                    </p>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-1/4 border rounded border-gray-400 text-center"
                    />
                </div>
                <p className="text-gray-700 text-sm my-2 p-2">
                    {description}
                </p>
                <div className="flex justify-center mt-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 flex items-center">
                        <img src="/images/icons8-cart-64.png" alt="Cart" className="w-6 h-6 mr-1" />
                        Add to Cart
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <button className=" text-black rounded-lg py-2 flex items-center">
                        <img src="/images/icons8-view-64.png" alt="Learn More" className="w-6 h-6 mr-1" />
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;

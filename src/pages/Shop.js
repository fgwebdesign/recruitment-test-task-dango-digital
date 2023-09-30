import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

const Shop = () => {
    const [productQuantities, setProductQuantities] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleQuantityChange = (quantity, name) => {
        setProductQuantities(prevProductQuantities => {
            const newProductQuantities = {
                ...prevProductQuantities,
                [name]: parseInt(quantity, 10)
            };

            const newTotalQuantity = Object.values(newProductQuantities).reduce((acc, cur) => acc + cur, 0);
            setTotalQuantity(newTotalQuantity);

            return newProductQuantities;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center my-2 p-8">
            <div className="flex items-center my-4 justify-center w-full">
                <h1 className="text-4xl font-semibold text-white leading-tight text-center">
                    Our tea bar Soap
                </h1>
            </div>
            <p className='text-white p-2 text-center'>
                Discover our products and improve your life!
            </p>

            <div className="mt-8 p-4 w-full">
                <h2 className="text-2xl text-white text-center">Total quantity added: {totalQuantity}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {productsData.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;

import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartAction, showProductsAction} from "./actions";

export const App = () => {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        const products = getAllProducts();
        dispatch(showProductsAction(products));
    }, []);

    return (
        <div>
            <h2>Shopping Cart Example</h2>
            <div>
                <h3>Products</h3>
                {products.map(product =>
                    <div>
                        <label>{product.name} - {product.currency}{product.price} x {product.availableQty}</label>
                        <br/>
                        <button onClick={e => dispatch(addToCartAction(product))}>Add to cart</button>
                    </div>
                )}
            </div>

            <div>
                <h3>Cart</h3>
                {cart.map(product =>
                    <div>
                        <label>{product.name} - {product.currency}{product.price} x {product.availableQty}</label>
                        <br/>
                    </div>
                )}
                <label>Total: $</label>{cart.reduce(((total, product) => total += product.price * product.availableQty), 0)}
            </div>
        </div>
    );
};

const getAllProducts = () => {
    return [
        {
            name: "iPad 4 Mini",
            price: 500.01,
            currency: "$",
            availableQty: 2
        }, {
            name: "H&M T-Shirt White",
            price: 10.99,
            currency: "$",
            availableQty: 10
        }, {
            name: "Charli XCX - Sucker CD",
            price: 19.99,
            currency: "$",
            availableQty: 5
        },
    ]
};
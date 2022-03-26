import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Mobile.css'

const Mobile = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    // const [item,setItem] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart = (product)=>{
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    const clearCut =() =>{
        setCart([]);
    }

    return (
        
        <div className='mobile-shop'>
           
           <div className='mobile-container'>
           {
               products.map(product=><Product 
                key={product.id}
                product={product}
                handleAddToCart ={handleAddToCart}
                ></Product>)
           }

           </div>
           <div className='cart-container'>
            <h1 className='order-summary'>Order Summary</h1>
            {
                cart.map(item => <Cart key={item.id} item ={item}></Cart>)
                
            }
            {/* <button onClick={()=>{RandomProduct()}} className="random-btn">Choose One</button> */}
            <button onClick={clearCut} className="remove-btn">Coose Again</button>
           </div>
        </div>
    );
};

export default Mobile;
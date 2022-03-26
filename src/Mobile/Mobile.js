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
   const RandomProduct = (cart) =>{
       for(const product in cart){
           console.log(product.id);
       }
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
            <h1 className='order-summary'> Here is Order Detail</h1>
            {
                cart.map(item => <Cart key={item.id} item ={item}></Cart>)
                
            }
             <div className='choose-me'>
             <button onClick={RandomProduct} className="chooseMe-btn">
             Choose one for me
            </button>
             </div>
            <div className='remove-all'>
            <button onClick={clearCut} className="remove-btn">Reset All</button>
            </div>
           
           </div>
        </div>
    );
};

export default Mobile;
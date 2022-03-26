import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = ( {product,handleAddToCart} ) => {
//   const {product,handleAddToCart} = props;

  const {name,price,img}  = product;

 
    return (
        <div className='product'>
            <img className='product-img' src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>Mobile Name:{name}</p>
            <p>Mobile Price:${price}</p>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>

             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
            

        </div>
    );
};

export default Product;
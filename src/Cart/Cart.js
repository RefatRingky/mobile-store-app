import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
// console.log(item);
    return (
        <div className='cart'>
           <div className='cart-item'>
               <img src={item.img} alt=''></img>
               <h3>Product Name:{item.name}</h3>
               {/* <MdDelete className='icon'></MdDelete> */}
            </div> 
        </div>
    );
};

export default Cart;
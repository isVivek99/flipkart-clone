import React, { useState, useEffect } from 'react';
import CartProductlist from './CartProductlist';

import './cartlist.css';

const CartList = ({ cartlist }) => {
    console.log(cartlist);
    return ( 
        <section className = "cart-container" >
            {
             cartlist.map((product) => (
                 <div  className="cart-product-container"  >
                     <CartProductlist key={product.id}  product={product}/>
                 </div>
             ))   
            }
        </section>
     );
}
 
export default CartList;
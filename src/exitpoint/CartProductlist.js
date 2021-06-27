import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const CartProductlist = ({ product }) => {

    const {  addProductToProductlist, removeProductFromProductlist } = useContext(GlobalContext);
    
    const [ count, setCount ] = useState( product.count );


    const addItem = () => {
        let index = 0;
        product.count+=1;
        const cartlist = JSON.parse( localStorage.getItem('cartlist'));
        const newProduct = {...product};
        console.log(newProduct === product);
    
        cartlist.forEach((listobj)=>{
            if(listobj.id === product.id ){
                console.log("dele");
                cartlist[index] = newProduct;
            }
            index+=1;
            
        })
        const newCartlist = [...cartlist];
        localStorage.setItem("cartlist", JSON.stringify(newCartlist));
        setCount(product.count);
        
    }

    const minusItem = () => {
        let index = 0;
        if(count>1){
            product.count-=1;
            const cartlist = JSON.parse( localStorage.getItem('cartlist'));
            const newProduct = {...product};
            console.log(newProduct === product);
            console.log(product);
            cartlist.forEach((listobj)=>{
                if(listobj.id === product.id ){
                    console.log("dele");
                    cartlist[index] = newProduct;
                }
                index+=1;
                
            })
            localStorage.setItem("cartlist", JSON.stringify(cartlist));
                setCount(product.count);
        }
       
        
    }

    function deleteItem() {
        console.log("delete in");
        const newProduct = {...product};
        // console.log(removeProductFromProductlist);
        removeProductFromProductlist(newProduct);
    }

    return ( 
        <div>
            <div className="cart-product-container" >
                    <div className="cart-prodcut__container__img">
                        <div className="cart-prodcut__container__img">
                            <img src= {product.src} alt={product.name} />
                        </div>
                        <div className="cart-product-counter"> 
                            <button style={{marginRight:"0.2rem"}} onClick={addItem}>+</button>{count}<button  style={{marginLeft:"0.2rem"}} onClick={minusItem} >-</button>
                            <button style={{marginTop:"0.5rem"}} onClick={()=>deleteItem()}>delete</button>
                        </div>
                    </div>
                    <div>
                        <div className="cart-product__container__desc">
                            <h4>{product.name}</h4>
                            <p>size:{product.size}</p>
                            <p><span>price:{product.price}</span></p>
                            <p>brand:{product.brand}</p>
                        </div>
                    </div>
                 </div>
        </div>
     );
}
 
export default CartProductlist;
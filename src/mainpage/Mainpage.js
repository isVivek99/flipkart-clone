import React from 'react';
import ProductList from '../products/ProductList';
import db from '../data/db.json';
import './mainpage.css';



const Mainpage = () => {
    console.log("in main");
    console.log(db);
    const productlist = db.products;
    console.log(productlist);
    return ( 
        <div className="mainpage">
            <ProductList productlist = {productlist} />

        </div>
     );
}
 
export default Mainpage;
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Checkbox from '@material-ui/core/Checkbox';
import './productlist.css'


const ProductList = ({ productlist }) => {
    
    const [products, setProducts] = useState([]);
    const [ sortedArray, setSortedArray ] = useState(null);
    const [ sortedArray2, setSortedArray2 ] = useState(null);

    useEffect(()=>{
        const productArray = productlist;
        setProducts(productArray);
    }
       ,[])

    const lowToHighHandler = () => {
        setSortedArray2(null);
       const lowTohighArray =  [...products].sort(function(a,b){
            return(a.price - b.price);
        })
        console.log(lowTohighArray);
        setProducts(lowTohighArray);
    }

    const highToLowHandler = () => {
        setSortedArray(null);
        const highTolowArray =  [...products].sort(function(a,b){
            return(b.price - a.price);
        })
        console.log(highTolowArray);
        setProducts(highTolowArray);
    }

    const popularityHandler = () => {
        setProducts(productlist);
    }

    const handleChange = (brand, e) => {
        console.log(e.target);
        const data = productlist;
        const arr = data.filter((product) =>{
            console.log(product.brand===brand);
            return( product.brand === brand)
        });
        setProducts(arr);
    }
    


    
    return ( 
        <div className="productlist__main__parent">
            <div className="filter">
            <div>
            <ul style={{listStyle:"none"}}>
                <li><h2>Brands</h2></li>
                <li> <button onClick={()=>popularityHandler()}>clear all</button> </li>
                <li>nike <Checkbox  onChange={(e)=>handleChange("Nike",e)} name="size"  /></li>
                <li>puma <Checkbox  onChange={(e)=>handleChange("Puma",e)} name="size" /></li>
                <li>allen solly <Checkbox  onChange={(e)=>handleChange("Allen Solly",e)} name="size" /></li>
                <li>peter england <Checkbox  onChange={(e)=>handleChange("Peter England",e)} name="size" /></li> 
            </ul>
        </div>
            </div>
            <div className = "sorting__buttons">
                <h4>Sort By</h4>
                <button onClick={popularityHandler}>popularity</button>
                <button onClick={lowToHighHandler}>Price--Low to High</button>
                <button onClick={highToLowHandler}>Price--High to Low</button>
            </div>
            <div className = "productlist__main">
            {   products && products.map(product => (
                    <ProductCard  key={product.id} 
                    name = {product.name} 
                    price = {product.price} 
                    size = {product.size}
                    brand = {product.brand}
                    src = {product.src}   
                    />
               ))}  
        </div>
        </div>
        
     );
}
 
export default ProductList;
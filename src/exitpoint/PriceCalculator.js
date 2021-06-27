import React,{ useState, useEffect } from 'react';
import './pricecalc.css';

const PriceCalculator = ({cartlist}) => {

    console.log(cartlist);
   
    const [sum, setSum] = useState(0);

    useEffect(()=>{
        let sum2=0;  
        for(let i=0; i<cartlist.length; i++){
            sum2+=cartlist[i].price * cartlist[i].count;
        }
        setSum(sum2);
    //    console.log(sum2, cartlist[0].price);
        
    },[cartlist])




    return ( 
        <div className="price__calc__parent" >
            <div className="price__details">
                <div className="price__details__items">
                    <div className="listitem price-detail-item">
                        <h5>Price</h5>
                        {/* <p>{product.price}</p> */}
                    </div>
                    <div className="listitem price-detail-item">
                        <h5>Discount</h5>
                        <p>N.A</p>
                    </div>
                    <div className="listitem price-detail-item">
                        <h5>Delivery Charge</h5>
                        <p>Free</p>
                    </div>
                    <div className="listitem price-detail-item">
                        <h4>Total Amount</h4>
                        {cartlist.length>0 ? <div>{sum}</div> : <p>0</p>  }
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default PriceCalculator;
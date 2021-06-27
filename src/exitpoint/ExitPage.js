import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Cartlist from './Cartlist';
import PriceCalculator from './PriceCalculator';    
import './exitpage.css';

const ExitPage = () => {

    const { cartlist } = useContext(GlobalContext);
    console.log("updated");

    useEffect(()=>{
        console.log("updaetd");
    },[cartlist])

    return ( 
        <div className = "exitpage-container">
            < Cartlist cartlist={cartlist} />
            < PriceCalculator cartlist={cartlist}/>
        </div>
     );
}
 
export default ExitPage;
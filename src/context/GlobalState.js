import { useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {

    cartlist:localStorage.getItem('cartlist')
    ?JSON.parse(localStorage.getItem('cartlist'))
    :[],
}
export const GlobalContext =  createContext(initialState);

export const GlobalProvider = ({children})=> {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("cartlist", JSON.stringify(state.cartlist));
    },[state])

    const addProductToProductlist = (product) => {
        dispatch({ type:"ADD_PRODUCT_TO_PRODUCTLIST", payload:product });
    }
    const removeProductFromProductlist = (product) => {
        
        dispatch({ type:"REMOVE_PRODUCT_FROM_PRODUCTLIST", payload:product});
    }
    
    
    return(
        <GlobalContext.Provider
            value = {
                {
                    cartlist : state.cartlist,
                    addProductToProductlist:addProductToProductlist,
                    removeProductFromProductlist:removeProductFromProductlist
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    )
}
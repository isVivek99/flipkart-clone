
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  
    switch( action.type ){

        case "ADD_PRODUCT_TO_PRODUCTLIST":
            return {
                ...state,
                productlist:[action.payload, ...state.productlist],
            }

        case "REMOVE_PRODUCT_FROM_PRODUCTLIST":
            return {
                ...state,
                productlist:state.watchlist.filter( (product)=>(product.id !== action.payload) )
            }

            default:
                return state;
    }
}
 

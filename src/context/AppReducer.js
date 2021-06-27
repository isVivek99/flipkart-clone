
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    console.log(action.payload);
    console.log(action.payload.id);

    switch( action.type ){

        case "ADD_PRODUCT_TO_PRODUCTLIST":
            return {
                ...state,
                cartlist:[action.payload, ...state.cartlist],
            }

        case "REMOVE_PRODUCT_FROM_PRODUCTLIST":
            return {
                ...state,
                cartlist:state.cartlist.filter( (product)=>(product.id !== action.payload.id) )
            }

    

            default:
                return state;
    }
}
 

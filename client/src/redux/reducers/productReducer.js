


export const getProductsReducer=(state={products:[]},action)=>{

    switch (action.type) {
        case "sucess":
            return {products:action.payload}
            
        case "failure":
            return {error:action.payload}
        default:
            return state;
            // break;
    }


}

export const getProductDetailReducer=(state={product:{}},action)=>{

    switch (action.type) {
        case "detailsucess":
            return {product:action.payload}
            
        case "detailsfailure":
            return {error:action.payload}
        default:
            return state;
            // break;
    }


}

export const cartReducer=(state = {cartItems:[]},action)=>{

    switch (action.type) {
        case "addCart":
            const item=action.payload;
            const exist=state.cartItems.find(product => product.id === item.id)
            if(exist){
                return{...state,cartItems:state.cartItems.map(data => data.product === exist.product?item:data)}
            } else{
                return{ ...state,cartItems:[...state.cartItems,item]}
            } 
        case "removeCart":
            return {...state,cartItems:state.cartItems.filter(product =>product.id !== action.payload)}
        default:
            return state;
            // break;
    }


}
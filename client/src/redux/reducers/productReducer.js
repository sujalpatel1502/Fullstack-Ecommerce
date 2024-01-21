


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



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
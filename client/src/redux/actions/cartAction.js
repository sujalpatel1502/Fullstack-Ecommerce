

import axios from "axios";
const URL='http://localhost:8000'
export const addCart=(id,quantity)=> async(dispatch)=>{
    try {
       const {data}= await axios.get(`${URL}/product/${id}`);
       console.log("response of producss single",data);
       dispatch({type:"addCart",payload:{...data,quantity}})
    } catch (error) {
        console.log("error while adding to cart",error);
    }

}

export const removeCart=(id)=>(dispatch)=>{
    dispatch({type:"removeCart",payload:id})
}
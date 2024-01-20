

import axios from "axios";
const URL='http://localhost:8000'
export const getproducts=()=> async(dispatch)=>{
    try {
       const {data}=await axios.get(`${URL}/products`);
       console.log("response of producss",data);
       dispatch({type:"sucess",payload:data})
    } catch (error) {
        console.log("error while getting products apiiii",error.message);
        dispatch({type:"failure",payload:error.message})
    }
}
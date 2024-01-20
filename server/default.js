import { products } from "./constants/data.js"
import Product from "./model/product.js";


const DefaultData= async()=>{
    try {
        // await Product.deleteMany()
        await Product.insertMany(products);
        console.log("sucessfull send to dbbbbbb");
    } catch (error) {
        console.log("error while sending data",error.message);
    }
}

export default DefaultData;
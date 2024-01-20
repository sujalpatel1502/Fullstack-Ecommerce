
import User from "../model/user-schema.js";
import Product from "../model/product.js";

export const usersignup= async(request,response)=>{
    try {
        const exists=await User.findOne({username:request.body.username});
        if(exists){
            return response.status(401).json({message:'username already exist'})
        }

        const user=request.body;
        console.log(user);
        const newUser= new User(user);
       await newUser.save();
       response.status(200).json({message:user})
    } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr whil signup",error);
       response.status(500).json({message:error.message})

    }
}
export const userlogin= async(request,response)=>{
    try {
        const username=request.body.username;
        const password=request.body.password;
       let user= await User.findOne({username:username,password:password})
       if(user){
        return response.status(200).json(`${username} login sucessfull`)
       }else{
        return response.status(401).json("invalid request")
       }
    } catch (error) {
        console.log("errorrrrrrrrrrrrrrrrrrr whil login",error);
       response.status(500).json({message:error.message})

    }
}

export const getProducts= async(req,res)=>{
    try {
       const products=await Product.find({});
       res.status(200).json(products)
    } catch (error) {
        console.log("eroor while getting products",error);
        res.status(500).json({message:error.message})
    }
}
import express from 'express';
import { usersignup,userlogin,getProducts } from '../controllers/user-controller.js';


const router = express.Router();

router.post('/signup',usersignup);
router.post('/login',userlogin);
router.get('/products',getProducts)

export default router
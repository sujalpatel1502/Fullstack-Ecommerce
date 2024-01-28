

import { Box, Button, Typography,styled } from "@mui/material"
import ButtonGroup from "./ButtonGroup"
import { useDispatch } from "react-redux"
import { removeCart } from "../../redux/actions/cartAction"



const Component=styled(Box)`
    border-top: 1px solid #f0f0f0;
    display:flex

`
const LeftComponent=styled(Box)`
   margin: 20px;
   display:flex;
   flex-direction:column;

`

const Remove=styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;
`

const CartItem=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch=useDispatch()
    const removeItemm=(id)=>{
            dispatch(removeCart(id))
    }
    return(
        <Component>
            <LeftComponent>
                <img style={{width:110,height:110}} src={item.url}/>
                <ButtonGroup/>
            </LeftComponent>
            <Box style={{margin:"20px"}}>
                <Typography>{item.title.longTitle.length > 50 ? item.title.longTitle.substring(0,50)+'....':null }</Typography>
                <Typography style={{color:"#878787",fontSize:"14px",marginTop:"10px"}}>Seller:Retailer

                    <Box component="span"><img src={fassured} alt="fassure" style={{width:50,marginLeft:10}}/></Box>
                </Typography>
                <Typography>
                            <Box component="span" style={{fontSize:20}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#388e3c'}}>{item.price.discount}</Box>
                        </Typography>
                        <Remove onClick={()=>removeItemm(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem
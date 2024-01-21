import { useEffect } from "react";
import { Box, Typography,styled,Grid, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItem from "./Actionitem";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Component=styled(Box)`
    background:#F2F2F2
`;

const Container=styled(Grid)`
    background:#FFFFFF;
    display:flex
`;

const RightContainer=styled(Grid)`
   margin-top:50px;

`;
const DetailView=()=>{
    const dispatch=useDispatch();
    const {id}=useParams();
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const {product}=useSelector(state => state.getProductDetail)
    console.log("productdetaillllllllldromselectorrr",product);
    useEffect(()=>{
        if(product && id!== product.id){
            console.log("useefeecttttttttttttt");
            dispatch( getProductDetails(id) )
        }
        
    },[dispatch,id,product])
    return(
        
        <Component>
            {

            product && Object.keys(product).length>0 &&
            <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>8 Ratings & 1 Reviews</Typography>
                        <Box component="span" ><img style={{width:77,marginLeft:20}} src={fassured}/></Box>
                        <Typography>
                            <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{color:'#388e3c'}}>{product.price.discount}</Box>
                        </Typography>
                        <Typography>
                            Available offers
                        </Typography>
                        <Box style={{marginTop:"20px"}}>
                            <Typography style={{marginBottom:"5px"}}><LocalOfferIcon style={{marginRight:"10px",color:"#00CC00"}}/>Get 20% off upto ₹ 50</Typography>
                            <Typography style={{marginBottom:"5px"}}><LocalOfferIcon style={{marginRight:"10px",color:"#00CC00"}}/>Get 30% off upto ₹ 50 flipkart pay later</Typography>
                            <Typography style={{marginBottom:"5px"}}><LocalOfferIcon style={{marginRight:"10px",color:"#00CC00"}}/>Get 40% off upto ₹ 50 flipkart wallet</Typography>
                            <Typography style={{marginBottom:"5px"}}><LocalOfferIcon style={{marginRight:"10px",color:"#00CC00"}}/>Get 50% off upto ₹ 50 gold card offer</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Waranty</TableCell>
                                    <TableCell style={{fontWeight:600}}>No waranty </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Seller</TableCell>
                                    <TableCell style={{fontWeight:600}}>Sujal Patel </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Decription</TableCell>
                                    <TableCell style={{fontWeight:600}}>{product.description} </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </RightContainer>
                    </Container>
}
        </Component>
    )
}

export default DetailView;
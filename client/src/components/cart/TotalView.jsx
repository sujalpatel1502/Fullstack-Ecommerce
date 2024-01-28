import { Box, Typography, styled } from "@mui/material"
import { useEffect, useState } from "react"

const Heading=styled(Box)`
padding:15px 24px;
border-bottom:1px solid #f0f0f0
`

const Container=styled(Box)`
padding:15px 24px;
& > p{
    margin-bottom:20px;
}
`

const Price = styled(Box)`
 float:right;
`


const TotalView=({cartItems})=>{
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);

    const totalAmount=()=>{
        let pricee=0,discountt=0;
        cartItems.map(item =>{
            pricee += item.price.mrp;
            discountt += (item.price.mrp - item.price.cost);
        });
        setPrice(pricee);
        setDiscount(discountt);
    }
    useEffect(()=>{
        totalAmount()
    },[cartItems])
    return(
        <Box>
            <Heading>
                <Typography>PRICE DETAILS</Typography>
            </Heading>
            <Container>
                    <Typography>price ({cartItems?.length} item)
                    <Price component="span">
                    ₹{price}
                    </Price>
                    </Typography>
                    <Typography>Discount
                    <Price component="span">
                    -₹{discount}
                    </Price>
                    </Typography>
                    <Typography>Delivery Charges
                    <Price component="span">
                    ₹40
                    </Price>
                    </Typography>
                    <Typography>Total Amount 
                    <Price component="span">
                    ₹{price-discount+40}
                    </Price>
                    </Typography>
                    <Typography style={{color:"green",marginTop:30}}>You will save ₹{discount-40}  on this order </Typography>
            </Container>
        </Box>
    )
}

export default TotalView

import { Box, Button, Typography,styled } from "@mui/material";

const LeftContainer=styled(Box)`
    min-width:40%;
    padding: 40px 0 0 80px

`

const Image=styled('img')({
    
   
    padding:"15px"
})

const StyledButton=styled(Button)`
width:48%;
height:50px;
border-radius:2px
`

const ActionItem=({product})=>{
    return(
        <LeftContainer>
            <Box style={{ border:'1px solid #f0f0f0',padding:' 15px 20px', width:"90%"}}>
            <Image src={product.detailUrl}/>
            </Box>
            <StyledButton style={{marginRight:10,background:"#ff9f00"}} variant="contained">Add to Cart</StyledButton>
            <StyledButton variant="contained">Buy Now</StyledButton>
            
        </LeftContainer>
    )
}

export default ActionItem
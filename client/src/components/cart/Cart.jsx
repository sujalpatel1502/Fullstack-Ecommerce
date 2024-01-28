import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux"
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Container = styled(Grid)`
    padding:30px 135px;

`

const Header = styled(Box)`
    padding:15px 24px;

`
const Buttonwrap = styled(Box)`
    padding:10px 27px;
    box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%)

`

const STyledButton=styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
`
const Cart=()=>{
    const {cartItems}=useSelector(state => state.cart);
    return(
        <>
        {
            cartItems.length?
                <Container container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=>(
                                    <CartItem item={item}/>
                                ))
                            }
                            <Buttonwrap>
                                <STyledButton>Place Order</STyledButton>
                            </Buttonwrap>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                                <TotalView cartItems={cartItems}/>
                    </Grid>

                </Container>
            :<div>Emptyyyy</div>
        }
        </>
    )
}

export default Cart
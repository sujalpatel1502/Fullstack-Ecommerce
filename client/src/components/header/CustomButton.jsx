import React, { useContext, useState } from 'react'
import {Badge, Box,Button, Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
const Wraper=styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right:40px;
    }
`
const Container=styled(Link)`
display:flex;
text-decoration:none;
color:white
`
const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px,40px;
border-radius:2px;

`
function CustomButton() {
  const {cartItems}=useSelector(state => state.cart);
  const [openDialog,setOpenDialog]=useState(false)
  const {account,setAccount}=useContext(DataContext);
  return (
    <Wraper>
      {
        account?<Profile account={account} setAccount={setAccount}/>:
      <LoginButton onClick={()=>setOpenDialog(true)} variant='contained'>Login</LoginButton>

      }
      <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color='secondary'>
        <ShoppingCartIcon/>
        </Badge>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />

    </Wraper>
  )
}

export default CustomButton

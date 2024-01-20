import React, { useContext, useState } from 'react'
import {Box,Button, Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
const Wraper=styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right:40px;
    }
`
const Container=styled(Box)`
display:flex
`
const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px,40px;
border-radius:2px;

`
function CustomButton() {
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
      <Container>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />

    </Wraper>
  )
}

export default CustomButton

import React, { useState,useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField,Typography,styled } from '@mui/material';
import { authenticatesignup,authenticatelogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const Component=styled(Box)({
    height:"70vh",
    width:"90vh"
})
const Wrapper=styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding: "25px 35px",
    flex:1

})
const Image=styled(Box)({
    background:"#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat" ,
    height:"83%",
    width:"40%",
    padding: "45px 35px"
})
const LoginButton=styled(Button)({
    textTransform:"none",
    background:"#F06418",
    marginTop:"20px",
    color:"#fff",
    height:"48px"
})
const RequestOtp=styled(Button)({
    textTransform:"none",
    background:"#F06418",
    marginTop:"20px",
    color:"#fff",
    height:"48px"
})
const signUpInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
}
const loginInitialValues={
    username:'',
    password:''
}
function LoginDialog({openDialog,setOpenDialog}) {
    const [signup,setsignup]=useState(true)
    const [signUpData,setSignUpData]=useState(signUpInitialValues)
    const [loginData,setLoginData]=useState(loginInitialValues)
    const[showLoginError,setShowLoginError]=useState(false);

    const {account,setAccount}=useContext(DataContext)
    const handleclose=()=>{
        setOpenDialog(false);
        setShowLoginError(false);
    }
    const onInputChange=(val)=>{
        setSignUpData({...signUpData,[val.target.name]:val.target.value})
        console.log(signUpData);
    }

    const onValueChange=(val)=>{
            setLoginData({...loginData,[val.target.name]:val.target.value})
    }
    const SignUpUser= async()=>{
       let response = await authenticatesignup(signUpData);
       console.log(response);
       if(!response) return;
       handleclose();
       setAccount(signUpData.firstname)

    }
    const loginUser= async()=>{
        let response = await authenticatelogin(loginData);
        console.log(response);
        if(response.status===200){
            setAccount(loginData.username)
           handleclose();

        }
        else{
            setShowLoginError(true)
        }
    //     if(!response) return;
    //  //    handleclose();
    //     setAccount(signUpData.firstname)
 
     }
  return (
    
   <Dialog open={openDialog} onClose={()=>{{setOpenDialog(false)}setsignup(true)}} PaperProps={{ sx:{maxWidth:"unset"}}}>
    <Component>
        <Box style={{display:"flex",height:"100%"}}>
        <Image>
            <p style={{color:"white",marginTop:"20"}}>Login</p>
        </Image>
        {
            signup ?
            <Wrapper>
            <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username'  label="enter username"/>
            {
            
            showLoginError&&<Typography style={{color:'red'}}>please enter valid username or password</Typography>
            
            }
            <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='password'  label="enter password"/>
            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
            <p style={{textAlign:"center"}}>or</p>
            <RequestOtp>request otp</RequestOtp>
            <p  onClick={()=>setsignup(!signup)} style={{color:"blue",fontWeight:"600",cursor:"pointer"}}>New to flipkart? create an account</p>

        </Wrapper>
        :
        <Wrapper>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='firstname' label="enter firstname"/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)}  name='lastname' label="enter lastname"/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)}  name='username' label="enter username"/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)}  name='email' label="enter email"/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='password' label="enter password"/>
            <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='phone' label="enter phone"/>
            <LoginButton onClick={()=>SignUpUser()}>Sign Up</LoginButton>

        </Wrapper>
        }
        
        </Box>
    </Component>
   </Dialog>
  )
}

export default LoginDialog

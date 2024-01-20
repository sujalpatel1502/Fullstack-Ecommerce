import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

function Profile({account,setAccount}) {
    const [open,setOpen]=useState(false)
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const logout=()=>{
        setAccount('');
    }
  return (
    <>
    <Box onClick={handleClick}> <Typography style={{marginTop:2,cursor:"pointer"}}>{account}</Typography></Box> 
    <Menu
        
        open={ Boolean(open)}
        onClose={handleClose}
       
      >
       
        <MenuItem onClick={()=>{handleClose();logout();}}>Logout</MenuItem>
      </Menu>
      </>
  )
}

export default Profile

import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import {Link} from 'react-router-dom'

const StyledHeader=styled(AppBar)`
background:#2874f0;
height:55px;
`
const Component=styled(Link)`
margin-left:12%;
`

const Custombuttonn=styled(Box)`
margin:0 5% 0 auto;
`

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <Component to='/'>
                <img src={logoURL} alt='logo' style={{width:75}}/>
            </Component>
            <Search/>
            <Custombuttonn>
                <CustomButton/>
            </Custombuttonn>

        </Toolbar>
    </StyledHeader>
  )
}

export default Header



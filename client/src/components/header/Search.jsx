import React, { useEffect, useState } from 'react'
import {InputBase,styled,Box, List, ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useSelector,useDispatch } from 'react-redux';
import { getproducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const Searchcontainer=styled(Box)`
background:#fff;
width:36%;
border-radius:2px;
margin-left:10px;
display:flex;
`

const ListWrapper=styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;
`


const Inputbase=styled(InputBase)`
padding-left:20px;
width:100%
`
const Searchiconcontainer=styled(Box)`
color:blue;
padding:5px;
`
function Search() {
  const [text,setText]=useState('');
  const {products}=useSelector(state =>state.getProducts);
  const dispatch =useDispatch();

  useEffect(()=>{
        dispatch(getproducts())
  },[dispatch])
  const getText=(textt)=>{
      setText(textt);
  }
  console.log("textttttt",text);
  return (
    <Searchcontainer>
    <Inputbase placeholder='Search for products'
    onChange={(e)=>getText(e.target.value)}
    value={text}
    />
    <Searchiconcontainer>
        <SearchIcon/>
    </Searchiconcontainer>
  
        {/* {
          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>{
            <ListItem>
              {product.title.longTitle}
            </ListItem>
          })
        } */}
        {text && (
        <ListWrapper>
          {products
            .filter(product =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map(product => 
              <ListItem key={product.id}>
                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none' ,color:'inherit'}} >
                {product.title.longTitle}
                </Link>
              </ListItem>
            )}
        </ListWrapper>
      )}
      
    </Searchcontainer>
  )
}

export default Search

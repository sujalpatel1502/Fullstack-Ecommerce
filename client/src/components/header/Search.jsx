import React from 'react'
import {InputBase,styled,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

const Searchcontainer=styled(Box)`
background:#fff;
width:36%;
border-radius:2px;
margin-left:10px;
display:flex;
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
  return (
    <Searchcontainer>
    <Inputbase placeholder='Search for products'/>
    <Searchiconcontainer>
        <SearchIcon/>
    </Searchiconcontainer>
    </Searchcontainer>
  )
}

export default Search

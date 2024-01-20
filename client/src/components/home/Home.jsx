import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import MidSection from './MidSection'
import Slide from './Slide'
import {getproducts} from '../../redux/actions/productAction'
import {useDispatch,useSelector} from 'react-redux'
function Home() {
const {products}=useSelector(state => state.getProducts);
console.log("products---------===",products);

  const dispatch=useDispatch()
  useEffect(()=>{
     dispatch( getproducts());
  },[])
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Slide products={products} title="Deal of the day"/>
      <MidSection/>
      <Slide products={products} title="Discounts for now"/>
      <Slide products={products} title="Recomended items"/>
      <Slide products={products} title="Season's top picks"/>


    </div>
  )
}

export default Home

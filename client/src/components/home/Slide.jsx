import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const Component=styled(Box)`
   margin-top:10px
   background:#FFFFF
  `
  const Deal=styled(Box)`
   padding:15px 20px
  `
  const Image=styled('img')({
    width:'auto',
    height:150
  })
const Slide=({products,title})=>{
    return(
        <Component>

            <Deal>
<Typography>{title}</Typography>
{/* <Box>
    <Countdown />
</Box> */}
            </Deal>
        <Carousel responsive={responsive}
        dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        infinite={true}
        autoPlay={true}
        centerMode={true}
        
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={4000}
        >
{
    products.map(product=>(
        <Box textAlign="center" style={{padding:'25px 15px'}}>
        <Image src={product.url} alt="product"/>
        <Typography>{product.title.shortTitle}</Typography>
        <Typography style={{color:"green"}}>{product.discount}</Typography>
        <Typography style={{opacity:.6}}>{product.tagline}</Typography>


        </Box>
    ))
}
        </Carousel>
        </Component>
    )
}

export default Slide;
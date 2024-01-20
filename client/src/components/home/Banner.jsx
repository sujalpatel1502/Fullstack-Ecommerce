import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from '@emotion/styled';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../constants/data';
const Image=styled('img')({
    width:'100%',
    height:280
})
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Banner() {
  return (
    <Carousel responsive={responsive}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"
  infinite={true}
  autoPlay={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={5000}
    >
      {bannerData.map((data, index) => (
        <Image key={index} src={data.url} alt='banner' />
      ))}
    </Carousel>
  );
}

export default Banner;

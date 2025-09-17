import React from 'react'
import LayOut from '../../Componets/LayOut/LayOut';
import CarouselEffect from '../../Componets/Carousel/Carousel';
import Category from '../../Componets/Category/Category';
import Product from '../../Componets/Product/Product';
const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
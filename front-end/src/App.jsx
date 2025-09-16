import { useState } from "react";

import "./App.css";
import Header from "./Componets/Header/Header";
import CarouselEffect from "./Componets/Carousel/Carousel";
import Category from "./Componets/Category/Category";
import Product from "./Componets/Product/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App;

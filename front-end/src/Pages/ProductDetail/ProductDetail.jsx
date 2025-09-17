import React, { useState, useEffect } from "react";
import LayOut from "../../Componets/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoint";
import ProductCard from "../../Componets/Product/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut>
  );
};

export default ProductDetail;

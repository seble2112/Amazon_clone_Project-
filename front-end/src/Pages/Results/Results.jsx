import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Componets/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoint";
import ProductCard from "../../Componets/Product/ProductCard";
const Results = () => {
  const [Results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results </h1>
        <p style={{ padding: "30px" }}>Category </p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {Results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}
export default Results;

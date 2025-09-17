import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Componets/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoint";
import ProductCard from "../../Componets/Product/ProductCard";
import Loader from "../../Componets/Loader/Loader"; // Make sure you have a Loader component

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );
        setResults(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: {categoryName}</p>
        <hr />
        {isLoading && <Loader />}
        {error && <p style={{ color: "red", padding: "20px" }}>{error}</p>}
        {!isLoading && !error && (
          <div className={classes.products__container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAdd={true}
                />
              ))
            ) : (
              <p style={{ padding: "20px" }}>No products found.</p>
            )}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;

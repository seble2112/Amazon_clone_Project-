import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Optional delay to make loader visible for testing
        // await new Promise((resolve) => setTimeout(resolve, 500));

        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p style={{ color: "red", textAlign: "center", padding: "20px" }}>
          {error}
        </p>
      )}
      {!isLoading && !error && (
        <section className={classes.product__container}>
          {products.length > 0 ? (
            products.map((singleProduct) => (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", padding: "20px" }}>
              No products found.
            </p>
          )}
        </section>
      )}
    </>
  );
};

export default Product;

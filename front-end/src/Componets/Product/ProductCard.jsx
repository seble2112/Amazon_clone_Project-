import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
  const { image, title, rating, id, price, description } = product;

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div
            style={{
              maxWidth: "750px",
            }}
          >
            {description}
          </div>
        )}
        {rating && (
          <div className={classes.rating}>
            <Rating value={rating?.rate || 0} precision={0.1} readOnly />
            <small>{rating?.count || 0}</small>
          </div>
        )}
        <CurrencyFormat amount={price} />
        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

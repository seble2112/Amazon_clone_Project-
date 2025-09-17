import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

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
      </div>
      {renderAdd && (
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      )}
     
    </div>
  );
};

export default ProductCard;

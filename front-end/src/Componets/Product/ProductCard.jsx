import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import { BsFillCartXFill } from "react-icons/bs";

function ProductCard({
  product,
  flex,
  renderDesc,
  renderAdd,
  showRemoveItem,
  itemAmount,
  total,
}) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  const removeAll = () => {
    dispatch({ type: Type.REMOVE_ITEM_IMMEDIATELY, id });
  };

  return (
    <div
      className={`${styles.card__container} ${
        flex ? styles.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={styles.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={styles.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CurrencyFormat amount={price} />
          {itemAmount && (
            <p style={{ fontWeight: "500", color: "var(--primary-color)" }}>
              Quantity: {itemAmount}
            </p>
          )}
          {total && (
            <p style={{ fontWeight: "500", color: "var(--primary-color)" }}>
              Total: ${price * itemAmount}
            </p>
          )}

          <div>
            {showRemoveItem && (
              <button
                className={styles.button}
                style={{ display: "flex", gap: "7px", padding: "5px" }}
                onClick={removeAll}
              >
                <BsFillCartXFill size={20} /> Remove All
              </button>
            )}
          </div>
        </div>

        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

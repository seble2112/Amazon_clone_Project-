import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link
        to={`/category/${encodeURIComponent(data.name)}`}
        className={classes.categoryLink}
      >
        <h2 className={classes.categoryTitle}>{data.title}</h2>
        <img
          src={data.imgLink}
          alt={data.title}
          className={classes.categoryImage}
        />
        <p className={classes.categoryText}>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />

          <p>All</p>
        </li>
        <li>Amazon haul</li>
        <li>Best Sellers</li>
        <li>New releases</li>
        <li>Amazon Basics</li>
        <li>Today's Deal</li>
        <li>Books</li>
        <li>Shopper Toolkit</li>
        <li>Fashion</li>
        <li>Gift Cards</li>
        
      </ul>
    </div>
  );
}

export default LowerHeader;

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

function LowerHeader() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={classes.lower__container}>
      <ul>
        {/* Toggle button (always visible) */}
        <li onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <AiOutlineMenu />
          <p>All</p>
        </li>

        {/* Menu items */}
        <div
          className={`${classes.menu__items} ${open ? classes.menu__open : ""}`}
        >
          <li onClick={goHome}>Amazon haul</li>
          <li onClick={goHome}>Best Sellers</li>
          <li onClick={goHome}>New releases</li>
          <li onClick={goHome}>Amazon Basics</li>
          <li onClick={goHome}>Today's Deal</li>
          <li onClick={goHome}>Books</li>
          <li onClick={goHome}>Shopper Toolkit</li>
          <li onClick={goHome}>Fashion</li>
          <li onClick={goHome}>Gift Cards</li>
        </div>
      </ul>
    </div>
  );
}

export default LowerHeader;

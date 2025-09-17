import React from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                {/* icon */}
                <CiLocationOn />
              </span>
              <div>
                <p>delivered to</p>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search bar */}

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon.nl" />
            <BsSearch size={25} />
            {/* icon */}
          </div>
          {/* right side sections */}

          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* three components  */}
            <Link to="/auth">
              <div>
                <p>Hello,Sign In</p>
                <span>Account and lists</span>
              </div>
            </Link>
            {/* orders  */}
            <Link  to ="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            {/* cart  */}
            <Link to ="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span> 0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;

import React from "react";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
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
            <input type="text" />
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
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account and lists</span>
              </div>
            </a>
            {/* orders  */}
            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>
            {/* cart  */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span> 0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;

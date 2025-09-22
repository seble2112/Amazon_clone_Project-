import { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import amazon_logo from "../../assets/amazon-icon.png";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import LowerHeader from "./LowerHeader";
import { auth } from "../../Utility/Firebase"; // ✅ fixed import

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return (item.amount || 0) + amount;
  }, 0);

  const handleSignOutAndClearCart = () => {
    if (user) {
      dispatch({ type: Type.EMPTY_BASKET });
      auth.signOut();
    }
  };

  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header__container}>
          {/* logo */}
          <div className={styles.logo__container}>
            <Link to="/">
              <img src={amazon_logo} alt="Amazon Logo" />
            </Link>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={styles.search}>
            <select name="category" id="category">
              <option value="">All</option>
              <option value="">Fashion</option>
              <option value="">Health & Wellness</option>
              <option value="">Home & Garden</option>
              <option value="">Sports</option>
              <option value="">Music</option>
              <option value="">Toys</option>
              <option value="">Food & Beverages</option>
              <option value="">Travel</option>
              <option value="">Education</option>
            </select>
            <input type="text" placeholder="Search...Amazon.de" />
            <button type="button" className={styles.searchBtn}>
              <BsSearch size={35} />
            </button>
          </div>

          {/* account, orders, cart */}
          <div className={styles.order__container}>
            {/* language selector */}
            <Link to="/" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="US Flag"
              />
              <select name="lang" id="lang">
                <option value="en">EN</option>
              </select>
            </Link>

            {/* account / sign in / sign out */}
            <Link to={user ? "#" : "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={handleSignOutAndClearCart}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;

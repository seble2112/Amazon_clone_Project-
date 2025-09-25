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
import { auth } from "../../Utility/Firebase"; 

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
  <select
    aria-describedby="searchDropdownDescription"
    className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
    data-nav-digest="74t0sAI3COaspl4AjF1HhdVWr/8="
    data-nav-selected="0"
    id="searchDropdownBox"
    name="url"
    style={{ display: "block", top: "2.5px" }}
    tabIndex="0"
    title="Search in"
  >
    <option selected="selected" value="search-alias=aps">
      All Departments
    </option>
    <option value="search-alias=alexa-skills">Alexa Skills</option>
    <option value="search-alias=amazon-devices">Amazon Devices</option>
    <option value="search-alias=amazon-global-store">
      Amazon Global Store
    </option>
    <option value="search-alias=bazaar">Amazon Haul</option>
    <option value="search-alias=warehouse-deals">Amazon Resale</option>
    <option value="search-alias=mobile-apps">Apps &amp; Games</option>
    <option value="search-alias=audible">Audible Audiobooks</option>
    <option value="search-alias=automotive">Automotive</option>
    <option value="search-alias=baby">Baby</option>
    <option value="search-alias=stripbooks">Books</option>
    <option value="search-alias=photo">Camera &amp; Photo</option>
    <option value="search-alias=popular">CDs &amp; Vinyl</option>
    <option value="search-alias=classical">Classical Music</option>
    <option value="search-alias=computers">Computers &amp; Accessories</option>
    <option value="search-alias=todays-deals">Deals</option>
    <option value="search-alias=digital-music">Digital Music</option>
    <option value="search-alias=dvd">DVD &amp; Blu-ray</option>
    <option value="search-alias=electronics">Electronics &amp; Photo</option>
    <option value="search-alias=fashion">Fashion</option>
    <option value="search-alias=fashion-womens">
      Women's Clothing, Shoes and Jewellery
    </option>
    <option value="search-alias=fashion-mens">
      Men's Clothing, Shoes and Jewellery
    </option>
    <option value="search-alias=fashion-girls">
      Girl's Clothing, Shoes and Jewellery
    </option>
    <option value="search-alias=fashion-boys">
      Boy's Clothing, Shoes and Jewellery
    </option>
    <option value="search-alias=fashion-baby">
      Baby Clothing, Shoes &amp; Jewellery
    </option>
    <option value="search-alias=outdoor">Garden &amp; Outdoors</option>
    <option value="search-alias=gift-cards">Gift Cards</option>
    <option value="search-alias=grocery">Grocery</option>
    <option value="search-alias=handmade">Handmade</option>
    <option value="search-alias=drugstore">Health &amp; Personal Care</option>
    <option value="search-alias=local-services">
      Home &amp; Business Services
    </option>
    <option value="search-alias=kitchen">Home &amp; Kitchen</option>
    <option value="search-alias=diy">Home Improvement</option>
    <option value="search-alias=industrial">Industrial &amp; Scientific</option>
    <option value="search-alias=digital-text">Kindle Store</option>
    <option value="search-alias=appliances">Large Appliances</option>
    <option value="search-alias=lighting">Lighting</option>
    <option value="search-alias=fashion-luggage">
      Luggage and travel gear
    </option>
    <option value="search-alias=luxury">Luxury Stores</option>
    <option value="search-alias=magazines">Magazines</option>
    <option value="search-alias=mi">
      Musical Instruments &amp; DJ Equipment
    </option>
    <option value="search-alias=office-products">Office Products</option>
    <option value="search-alias=videogames">PC &amp; Video Games</option>
    <option value="search-alias=beauty">Perfume &amp; Cosmetic</option>
    <option value="search-alias=pets">Pet Supplies</option>
    <option value="search-alias=luxury-beauty">Premium Beauty</option>
    <option value="search-alias=instant-video">Prime Video</option>
    <option value="search-alias=software">Software</option>
    <option value="search-alias=sports">Sports</option>
    <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
    <option value="search-alias=toys">Toys &amp; Games</option>
  </select>

  <input type="text" placeholder="Search..." />
  <button type="button" className={styles.searchBtn}>
    <BsSearch size={28} />
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

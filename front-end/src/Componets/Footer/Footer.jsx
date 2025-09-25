import React from "react";
import "./Footer.css";
import logo from "../../assets/amazon-icon.png"

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="back-to-top">
        <a href="#" onClick={scrollToTop}>
          Back to top
        </a>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-secondary">
        <div className="footer-secondary-content">
          <div className="footer-logo">
            <img src={logo} alt="Amazon Logo" />
          </div>

          <div className="footer-language-currency">
            <div className="select-wrapper">
              <span className="globe-icon">🌐</span>
              <select className="footer-select">
                <option>English</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select className="footer-select">
                <option>USD - U.S. Dollar</option>
              </select>
            </div>

            <div className="select-wrapper">
              <span className="flag-icon">🇺🇸</span>
              <select className="footer-select">
                <option>United States</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-services">
        <div className="services-grid">
          <div className="service-column">
            <div className="service-item">
              <h4>Amazon Music</h4>
              <p>Stream millions of songs</p>
            </div>
            <div className="service-item">
              <h4>Amazon Business</h4>
              <p>Everything For Your Business</p>
            </div>
            <div className="service-item">
              <h4>IMDbPro</h4>
              <p>Get Info Entertainment Professionals Need</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>Amazon Ads</h4>
              <p>Reach customers wherever they spend their time</p>
            </div>
            <div className="service-item">
              <h4>AmazonGlobal</h4>
              <p>Ship Orders Internationally</p>
            </div>
            <div className="service-item">
              <h4>Kindle Direct Publishing</h4>
              <p>Indie Digital & Print Publishing Made Easy</p>
            </div>
            <div className="service-item">
              <h4>eero WiFi</h4>
              <p>Stream 4K Video in Every Room</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>6pm</h4>
              <p>Score deals on fashion brands</p>
            </div>
            <div className="service-item">
              <h4>Amazon Web Services</h4>
              <p>Scalable Cloud Computing Services</p>
            </div>
            <div className="service-item">
              <h4>Prime Video Direct</h4>
              <p>Video Distribution Made Easy</p>
            </div>
            <div className="service-item">
              <h4>Blink</h4>
              <p>Smart Security for Every Home</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>AbeBooks</h4>
              <p>Books, art & collectibles</p>
            </div>
            <div className="service-item">
              <h4>Audible</h4>
              <p>Listen to Books & Original Audio Performances</p>
            </div>
            <div className="service-item">
              <h4>Shopbop</h4>
              <p>Designer Fashion Brands</p>
            </div>
            <div className="service-item">
              <h4>Neighbors App</h4>
              <p>Real-Time Crime & Safety Alerts</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>ACX</h4>
              <p>Audiobook Publishing Made Easy</p>
            </div>
            <div className="service-item">
              <h4>Box Office Mojo</h4>
              <p>Find Movie Box Office Data</p>
            </div>
            <div className="service-item">
              <h4>Woot!</h4>
              <p>Deals and Shenanigans</p>
            </div>
            <div className="service-item">
              <h4>Amazon Subscription Boxes</h4>
              <p>Top subscription boxes – right to your door</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>Sell on Amazon</h4>
              <p>Start a Selling Account</p>
            </div>
            <div className="service-item">
              <h4>Goodreads</h4>
              <p>Book reviews & recommendations</p>
            </div>
            <div className="service-item">
              <h4>Zappos</h4>
              <p>Shoes & Clothing</p>
            </div>
            <div className="service-item">
              <h4>PillPack</h4>
              <p>Pharmacy Simplified</p>
            </div>
          </div>

          <div className="service-column">
            <div className="service-item">
              <h4>Veeqo</h4>
              <p>Shipping Software Inventory Management</p>
            </div>
            <div className="service-item">
              <h4>IMDb</h4>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div className="service-item">
              <h4>Ring</h4>
              <p>Smart Home Security Systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
          <a href="#">Your Ads Privacy Choices</a>
          <span className="choices-icon">
            <img
              src="https://m.media-amazon.com/images/G/01/legal/privacy/truste-banner.png"
              alt=""
            />
          </span>
        </div>
        <div className="footer-copyright">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;

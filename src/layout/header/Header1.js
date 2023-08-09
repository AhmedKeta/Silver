import Link from "next/link";
import Menu from "./Menu";

const Header1 = () => {
  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-gray">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:info@silverpyramids.com">
                  info@silverpyramids.com
                </a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
              </li>
              <li className="for-none">
                <i className="far fa-clock" /> Working Hours : Monday- Friday, 9
                am to 5pm
              </li>
              <li>
                <div className="social-style-one">
                  <a href="https://www.facebook.com/profile.php?id=100094335560472">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://x.com/silverpyramids1">
                    <i className="fab fa-x-twitter" />
                  </a>
                  <a href="https://www.instagram.com/silverpyramids/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper bgc-black">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-one.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Get a Quote <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header1;

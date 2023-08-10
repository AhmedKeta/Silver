import Link from "next/link";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const DefaultHeader = () => {
  return (
    <header className="main-header header-two">
      <HeaderTop />
      {/*Header-Upper*/}
      <div className="header-upper bg-white">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
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
            {/* Header Social */}
            <div className="social-style-two">
              <a href="https://www.facebook.com/people/Silver-Pyramids-Inc/100094335560472/">
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
              <a href="https://www.tiktok.com/@silver.pyramids?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
                <i className="fab fa-tiktok" />
              </a>
              <a href="https://web.snapchat.com/?ref=snapchat_dot_com_login_cta">
                <i className="fab fa-snapchat" />
              </a>
              <a href="https://www.youtube.com/@SilverPyramids1">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;

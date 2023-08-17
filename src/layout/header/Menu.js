import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo-one.webp"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            {/*  */}
            {/*  */}
            {/* Home */}
            <li className="dropdown">
              <Link href="/" onClick={() => active("home")}>
                Home
              </Link>
            </li>
            {/*  */}
            {/*  */}
            {/* Services */}
            <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Technology Solutions</Link>
                </li>
                <li>
                  <Link href="services2">Marketing Solutions</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            {/*  */}
            {/*  */}
            {/* Projects */}
            {/* <li className="dropdown">
              <Link href="project-grid" onClick={() => active("Project")}>
                Case Studies
              </Link>
            </li> */}
            {/*  */}
            {/*  */}
            {/* Contact Us */}
            <li className="dropdown">
              <Link href="contact" onClick={() => active("Project")}>
                Contact US
              </Link>
            </li>
            {/*  */}
            {/*  */}
            {/* Blog */}
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("blog")}>
                blog
              </a>
              <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
            {/*  */}
            {/*  */}
            {/* Pages */}
            <li className="dropdown">
              <a href="#" onClick={() => active("pages")}>
                About Silver Pyramids
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">Our Story</Link>
                </li>
                <li>
                  <Link href="why-us">Why Us</Link>
                </li>
                <li>
                  <Link href="team">Our Team</Link>
                </li>
                {/* <li>
                  <Link href="terms">Terms & Conditions</Link>
                </li> */}
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li>
              <div className=" social-style-three" id="mobile-social">
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
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header"> 
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.webp"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          {/*  */}
          {/*  */}
          {/* Home */}
          <li className="dropdown">
            <Link href="/">Home</Link>
          </li>
          {/*  */}
          {/*  */}
          {/* Services */}
          <li className="dropdown">
            <a href="#">services</a>
            <ul>
              <li>
                <Link href="services">Technology Solutions</Link>
              </li>
              <li>
                <Link href="services2">Marketing Solutions</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          {/*  */}
          {/*  */}
          {/* Case Studies */}
          {/* <li className="dropdown">
            <Link href="project-grid">Case Studies</Link>
          </li> */}
          {/*  */}
          {/*  */}
          {/* Clients */}
          {/* <li className="dropdown">
            <Link href="project-grid">Clients</Link>
          </li> */}
          {/*  */}
          {/*  */}
          {/* Shop */}
          {/* <li className="dropdown">
            <a href="#">shop</a>
            <ul>
              <li>
                <Link href="shop">shop grid</Link>
              </li>
              <li>
                <Link href="product-details">product details</Link>
              </li>
              <li>
                <Link href="cart">cart page</Link>
              </li>
              <li>
                <Link href="checkout">checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          {/*  */}
          {/*  */}
          {/* Blog */}
          {/* <li className="dropdown">
            <a href="#">blog</a>
            <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
          {/*  */}
          {/*  */}
          {/* Contact Us */}
          <li className="dropdown">
            <Link href="contact">Contact us</Link>
          </li>
          {/*  */}
          {/*  */}
          {/* About Us */}
          <li className="dropdown">
            <Link href="about">About Silver Pyramids</Link>
            <ul>
              <li>
                <Link href="about">Our Story</Link>
              </li>
              <li>
                <Link href="why-us">Why Us</Link>
              </li>
              <li>
                <Link href="team">Our Team</Link>
              </li>
              {/* <li>
                <Link href="terms">Terms & Conditions</Link>
              </li> */}
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;

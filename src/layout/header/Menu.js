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
                src="assets/images/logos/logo-one.png"
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
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
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
            <li className="dropdown">
              <Link href="project-grid" onClick={() => active("Project")}>
                Case Studies
              </Link>
            </li>
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
                About Us
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">Our Story</Link>
                </li>
                <li>
                  <Link href="team">Our Team</Link>
                </li>
                <li>
                  <Link href="terms">Terms & Conditions</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
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
              src="assets/images/logos/logo-one.png"
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
          <li className="dropdown">
            <Link href="project-grid">Case Studies</Link>
          </li>
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
            <Link href="about">About Us</Link>
            <ul>
              <li>
                <Link href="about">Our Story</Link>
              </li>
              <li>
                <Link href="team">Our Team</Link>
              </li>
              <li>
                <Link href="terms">Terms & Conditions</Link>
              </li>
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

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations?</span>
              <h2>We’re Ready to Growth your Business</h2>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
                Get Free Quote <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-0" style={{ background: "none" }}>
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo-footer.png" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p style={{ marginBottom: "0px" }}>
                <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
              </p>
              <a href="mailto:info@silverpyramids.com">
                info@silverpyramids.com
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-style-one">
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
              </div>
              <br />
              <div className="social-style-one mt-10">
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
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Technology Solutions
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services2">
                        Marketing Solutions
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="project-grid">
                        Popular Works
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="digital-details">
                        <a>Digital Consulting</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="development-details">
                        <a>Design &amp; Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="social-details">
                        <a>Social Media Adv.</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="seo-details">
                        <a>Search Engine</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Support</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="terms">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {" "}
            {/* Update this line */}
            <div className="col-lg-12">
              <div className="copyright-text text-center">
                <p>
                  © 2023 Silver Pyramids. All rights reserved.
                  <a href="mailto:info@silverpyramids.com"> Contact us</a> for
                  any inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        {/* <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        /> */}
      </div>
    </footer>
  );
};
export default Footer;

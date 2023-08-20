import Link from "next/link";
import { Fragment } from "react";
import Meta from "@/components/Meta";

const E404 = () => {
  return (
    <Fragment>
      <Meta title="Not found" />
      <section className="error-page-area py-80">
        <div className="container">
          <div className="error-page-content text-center">
            <div className="image mb-40 rmb-25 wow fadeInUp delay-0-4s">
              <img src="/assets/images/background/404.webp" alt="Error" />
            </div>
            <div className="row justify-content-center wow fadeInUp delay-0-2s">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title mb-20">
                  <h2>OPPS! This Pages Are Can’t Be Found </h2>
                </div>
                <p>Explore more about our services and our work.</p>
              </div>
            </div>
            <div className="btn-social pt-15 wow fadeInUp delay-0-4s">
              <Link legacyBehavior href="/">
                <a className="theme-btn mb-30 mx-2">
                  Go to Home <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
              <div className="social-style-two mb-30 mx-2">
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
      </section>
    </Fragment>
  );
};
export default E404;

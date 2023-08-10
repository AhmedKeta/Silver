import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Meta from "@/components/Meta";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Service2 = () => {
  return (
    <Layout>
      <Meta title="Services" />
      <PageBanner pageName={"Services"} pageTitle="Marketing Solutions" />
      <section className="services-area-three overflow-hidden pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Marketing Solutions</span>
                  <h2>
                    Drive Your Business Growth with Our Marketing Solutions
                  </h2>
                </div>
                <p>
                  We specialize in providing top-notch marketing solutions that
                  will help your business thrive. Our team of experts is
                  dedicated to delivering outstanding results and helping you
                  achieve your marketing goals.
                </p>
                <ul className="list-style-one pt-5">
                  <li>Comprehensive Market Research and Analysis</li>
                  <li>Strategic Planning and Campaign Development</li>
                  <li>Content Creation and Copywriting</li>
                  <li>Social Media Marketing and Advertising</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                </ul>
                {/* <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-45">
                    View All Services <i className="fas fa-long-arrow-right" />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Trusted Partner</h4>
                    </Link>
                    <p>
                      We have built a strong reputation as a trusted partner for
                      businesses of all sizes. With our extensive experience and
                      a dedicated team, we provide reliable and effective
                      marketing solutions.{" "}
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>{" "}
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-brainstorming" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Technical Support</h4>
                    </Link>
                    <p>
                      Our technical support team is available round the clock to
                      assist you with any issues or concerns you may have.{" "}
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-technical-support" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Digital Marketing</h4>
                    </Link>
                    <p>
                      Our digital marketing services help businesses establish a
                      strong online presence and reach their target audience
                      effectively.{" "}
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Social Media Marketing</h4>
                    </Link>
                    <p>
                      Harness the power of social media to reach your target
                      audience and build brand awareness. Our social media
                      marketing strategies will help you engage with your
                      customers and drive conversions.{" "}
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section
        className="statistics-area-four text-white bgs-cover pt-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/background/statistics-three.jpg)",
        }}>
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Company Statistics</span>
                  <h2>Learn About Our Comapny Statistics</h2>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="read-more">
                    Learn More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-target" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={2563}>
                      <Counter end={2563} />
                    </span>
                    <span className="counter-title">Project Complate</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-target-audience" />
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop="98.9">
                      <Counter end={98.9} decimals={1} />
                    </span>
                    <span className="counter-title">Clinets Happy</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-customer-experience" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="35.6">
                      <Counter end={35.6} decimals={1} />
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-medal" />
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={63}>
                      <Counter end={63} />
                    </span>
                    <span className="counter-title">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* What We Provide Area Start */}
      <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provides</span>
            <h2>Marketing, Content, and Media Services</h2>
          </div>
          <Slider {...serviceThreeSlider} className="service-three-slider">
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three1.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">01</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Digital Marketing Strategy
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Reach your target audience with a tailored digital marketing
                    strategy that drives results.{" "}
                  </p>
                  <Link legacyBehavior href="/digital-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/services/service-three2.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three2.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Content Creation and Copywriting
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Create compelling and engaging content that resonates with
                    your audience and drives brand awareness.{" "}
                  </p>
                  <Link legacyBehavior href="/content-creation-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">03</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Media Production and Management
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Produce high-quality media content, including videos and
                    images, to captivate your audience and enhance your brand
                    presence.
                  </p>
                  <Link legacyBehavior href="/media-production-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three1.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">04</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Social Media Marketing and Management
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Connect and engage on social platforms. Build a strong
                    online presence and foster brand loyalty.
                  </p>
                  <Link legacyBehavior href="/social-media-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">05</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Search Engine Optimization (SEO)
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Boost search rankings and organic traffic. Improve
                    visibility and reach your target audience.
                  </p>
                  <Link legacyBehavior href="/seo-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-item-three">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg">
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">06</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="email-details">
                      Email Marketing
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Nurture customer relationships through targeted campaigns.
                    Drive engagement and generate leads.
                  </p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="about-bg-shape">
          <img src="assets/images/background/what-we-provide.png" alt="Shape" />
        </div>
      </section>
      {/* What We Provide Area End */}
      {/* Pricing Plan Area start */}
      {/* <section className="price-plan-area overflow-hidden bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <span className="badge">Best Package</span>
                <h4 className="title">Basic Plan</h4>
                <span className="price-count">5 Services Included</span>
                <span className="price">29.85</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">Best Package</span>
                <h4 className="title">standard Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">49.64</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <span className="badge">Best Package</span>
                <h4 className="title">Golden Package</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">98.73</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="price-shapes">
          <img
            className="shape one wow fadeInLeft delay-0-5s"
            src="assets/images/shapes/price-left.png"
            alt="Shape"
          />
          <img
            className="shape two w-50"
            src="assets/images/shapes/price-right.png"
            alt="Shape"
          />
        </div>
      </section> */}
      {/* Pricing Plan Area end */}
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Service2;

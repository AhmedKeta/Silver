import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Meta from "@/components/Meta";
import Slider from "react-slick";
import { partnerSlider } from "@/src/sliderProps";
import { Nav, Tab } from "react-bootstrap";
import PartnerSlider from "@/components/slider/PartnerSlider";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <Layout>
      <Meta
        title="Why Us"
        description="Learn more about Silver Pyramids. We are a leading provider of technology and marketing solutions, committed to helping businesses thrive in the digital landscape."
        keywords="why us, technology solutions, marketing services, digital landscape"
      />
      <PageBanner
        hero={"/assets/images/hero/about-us.webp"}
        pageName={"Why Us"}
        pageTitle={"Why Silver Pyramids"}
      />
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>
                  Top-Notch Software Development and Digital Transformation
                </h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s">
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1">
                    <i className="flaticon-creativity" />{" "}
                    <span style={{ fontSize: 18 }}>UX/UI Design</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2">
                    <i className="flaticon-test" />{" "}
                    <span style={{ fontSize: 18 }}>Apps Development</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3">
                    <i className="flaticon-creativity" />{" "}
                    <span style={{ fontSize: 18 }}>
                      {" "}
                      Design &amp; Development
                    </span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4">
                    <i className="flaticon-support" />{" "}
                    <span style={{ fontSize: 18 }}>Digital Consulting</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="/assets/images/about/uiux.webp"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Comprehensive UI/UX Assessment</h3>
                        <p>
                          At our company, we understand the significance of user
                          experience (UX) and user interface (UI) design in
                          creating successful digital products. Our team of
                          experienced designers conducts a comprehensive
                          assessment of your existing UX/UI design or develops
                          one from scratch to ensure optimal user engagement and
                          satisfaction.
                        </p>
                        <Link legacyBehavior href="/uiux-details">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>
                          Customized App Development for Your Business Needs
                        </h3>
                        <p>
                          In today's digital landscape, having a mobile
                          application is essential for businesses to reach their
                          target audience and drive growth. Our app development
                          services offer customized solutions tailored to your
                          specific business needs, helping you stay ahead in the
                          competitive market.
                        </p>
                        <Link legacyBehavior href="/mobile-details">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="/assets/images/about/app.webp"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="/assets/images/about/design.webp"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Efficient Design and Development Process</h3>
                        <p>
                          In the world of web development, a seamless and
                          efficient design and development process can make all
                          the difference. At our company, we prioritize a
                          streamlined approach to ensure the successful creation
                          and delivery of digital products. Our team of skilled
                          designers and developers work collaboratively to bring
                          your vision to life, adhering to industry best
                          practices and utilizing the latest technologies.
                        </p>
                        <Link legacyBehavior href="/development-details">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Reliable Tech Support for Seamless Operations</h3>
                        <p>
                          Technology plays a vital role in the success of any
                          business. Our tech support services are designed to
                          provide you with reliable solutions and assistance to
                          ensure the seamless operation of your IT
                          infrastructure.
                        </p>
                        <Link legacyBehavior href="/digital-details">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="/assets/images/about/support.webp"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="/assets/images/about/why-choose-shape1.webp"
            alt="Shape"
          />
          <img
            className="shape two"
            src="/assets/images/about/why-choose-shape2.webp"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* About Area start */}
      {/* <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img
                  src="/assets/images/about/about-five1.webp"
                  alt="Silver Pyramids"
                />
                <img
                  src="/assets/images/about/about-five2.webp"
                  alt="Silver Pyramids"
                />
                <div className="experience-years">
                  <h4>
                    Years Of Experience In Technology Services and Marketing
                  </h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="/assets/images/about/about-five-bg.webp"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Silver Pyramids</span>
                  <h2>
                    Delivering Exceptional Technology, Marketing Solutions and
                    Services
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-rocket" />
                      </div>
                      <h4>
                        <div>Years In The Market</div>
                      </h4>
                      <p>
                        Over 24 years of industry experience, continuously
                        evolving and shaping success stories through technology
                        and marketing solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <div legacyBehavior href="development-details">
                          Providing Technology Solutions &amp; Business
                          Development
                        </div>
                      </h4>
                      <p>
                        We specialize in providing cutting-edge IT solutions and
                        strategic business development services for startups,
                        helping them achieve rapid growth and success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2 pb-4">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(/assets/images/background/statistics.webp)",
            }}>
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">
                      Silver Pyramids Statistics
                    </span>
                    <h2>Learn About Our Company Statistics</h2>
                  </div>
                  <Link legacyBehavior href="/project-grid">
                    <a className="read-more">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={321}>
                        <Counter end={321} />
                      </span>
                      <span className="counter-title">Projects Completed</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="98.9">
                        <Counter end={98.9} decimals={1} />
                      </span>
                      <span className="counter-title">Clients Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="35.6">
                        <Counter end={78} decimals={1} />
                      </span>
                      <span className="counter-title">Years of Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-networking" />
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={4}>
                        <Counter end={4} />
                      </span>
                      <span className="counter-title">Offices Locations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Testimonial Area Four start */}
      <section className="testimonials-area-four rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 ms-lg-auto">
              <div className="testimonials-four-content py-65 rpt-0 rpb-35">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>What Our Client’s Say About Our Agency</h2>
                  <span className="bg-text">Says</span>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="/assets/images/testimonials/client.webp"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Silver Pyramids was ...</h4>
                    </div>
                    <div className="testi-text">
                      A key component to delivering a very complex content
                      management solution to a specialty pharmaceutical company
                      that was heavily reliant on manual processes to manage a
                      variety of content throughout their quality and R&D
                      organizations.
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Mike P.</h4>
                        <span className="designation">
                          Consulting Senior Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="/assets/images/testimonials/client.webp"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                    </div>
                    <div className="testi-text">
                      When it comes to the subject matter of ECM and Content
                      Management, Silver Pyramids has a very strong grasp on
                      both how to best apply it to an organization, as well as
                      what features an ECM software line requires to be
                      successful.
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Vince S.</h4>
                        <span className="designation">
                          Director of Technology
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item style-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="/assets/images/testimonials/client.webp"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="testi-header">
                      <h4>Experts in ... </h4>
                    </div>
                    <div className="testi-text">
                      Successful delivery of innovative solutions and
                      consistently exceeding customer expectations. They have a
                      wealth of experience and knowledge in Enterprise Content
                      Management,
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="flaticon-quotation" />
                      </div>
                      <div className="title">
                        <h4>Yasser M.</h4>
                        <span className="designation">Technical Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial-four-image"
          style={{
            backgroundImage:
              "url(/assets/images/testimonials/testimonial-four.webp)",
          }}
        />
      </section>
      {/* Testimonial Area Three end */}
      {/* Partners Area start */}
      <PartnerSlider style={{ backgroundColor: "Silver" }} />

      {/* Partners Area end */}
    </Layout>
  );
};
export default About;

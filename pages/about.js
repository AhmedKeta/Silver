import PageBanner from "@/src/components/PageBanner";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Meta from "@/components/Meta";
import Slider from "react-slick";
import { partnerSlider } from "@/src/sliderProps";
import { Nav, Tab } from "react-bootstrap";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <Layout>
      <Meta
        title="About Us"
        description="Learn more about Silver Pyramids. We are a leading provider of technology and marketing solutions, committed to helping businesses thrive in the digital landscape."
        keywords="about us, technology solutions, marketing services, digital landscape"
      />
      <PageBanner pageName={"About Us"} />
      {/* About Area start */}
      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-five1.jpg"
                  alt="Silver Pyramids"
                />
                <img
                  src="assets/images/about/about-five2.png"
                  alt="Silver Pyramids"
                />
                <div className="experience-years">
                  <h4>
                    Years Of Experience In Technology Services and Marketing
                  </h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
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
                        <Link legacyBehavior href="project-grid">
                          Years In The Market
                        </Link>
                      </h4>
                      <p>
                        Over 24 years of industry experience, continuously
                        evolving and shaping success stories through technology
                        and marketing solutions.
                      </p>
                      <Link legacyBehavior href="/project-grid">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="development-details">
                          Providing Technology Solutions &amp; Business
                          Development
                        </Link>
                      </h4>
                      <p>
                        We specialize in providing cutting-edge IT solutions and
                        strategic business development services for startups,
                        helping them achieve rapid growth and success.
                      </p>
                      <Link legacyBehavior href="/development-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Simplicity
                  </Link>
                </h4>
                <p>Effortless solutions for seamless experiences.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Social Good
                  </Link>
                </h4>
                <p>Making a positive impact on communities everywhere.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-mission-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Trust Partner
                  </Link>
                </h4>
                <p>Reliable collaboration for mutual success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area Three end */}
      {/* About Area start */}
      <section
        className="contact-form-area py-20 rpy-100 bgs-cover mb-4"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",

        }}
      >
        <section className="about-area-two py-20 rpy-100 rel z-1">

          <div className="container">
            <div className="row align-items-center gap-90">
              <div className="col-lg-6">
                <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                  <img src="/assets/images/logos/logo-big.png" alt="About" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Our Story</span>
                    <h2>
                      Pioneering Digital Transformation: 23 Years of Crafting
                      Online Success Stories
                    </h2>
                  </div>
                  <p>
                    Over two decades ago, we embarked on a journey driven by the
                    evolving digital landscape. Recognizing the burgeoning need
                    for online presence, we founded a software solutions and
                    marketing company. As the internet became intrinsic to
                    modern life, we positioned ourselves at the forefront,
                    offering comprehensive website development services. With
                    time, our vision expanded to encompass the demand for
                    effective online promotion. Thus, our marketing division
                    took shape, enabling us to propel clients' websites to new
                    heights. Today, after 23 years of innovation and adaptation,
                    we stand as a testament to our commitment to transforming
                    businesses in the digital age, continually shaping success
                    stories through cutting-edge solutions and unwavering
                    dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* About Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2">
        <div className="container">
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Our Statistics</span>
                    <h2>Learn About Our Comapny Statistics</h2>
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
                        data-stop={1021}
                      >
                        <Counter end={1021} />
                      </span>
                      <span className="counter-title">Project Complate</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="98.9"
                      >
                        <Counter end={98.9} decimals={1} />
                      </span>
                      <span className="counter-title">Clinets Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="35.6"
                      >
                        <Counter end={78} decimals={1} />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={63}
                      >
                        <Counter end={63} />
                      </span>
                      <span className="counter-title">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Team Area start */}
      <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Team Area end */}
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
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span>UX/UI Design</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <i className="flaticon-test" />{" "}
                    <span>Apps Development</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span> Design &amp; Development</span>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <i className="flaticon-support" />{" "}
                    <span>Digital Consulting</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
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
                          src="assets/images/about/why-choose1.jpg"
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
                          src="assets/images/about/why-choose1.jpg"
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
                          src="assets/images/about/why-choose1.jpg"
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
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}
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
                      src="assets/images/testimonials/client.png"
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
                      src="assets/images/testimonials/client.png"
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
                      src="assets/images/testimonials/client.png"
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
              "url(assets/images/testimonials/testimonial-four.jpg)",
          }}
        />
      </section>
      {/* Testimonial Area Three end */}
      {/* Partners Area start */}
      <section
        className="partners-area mt-60 pt-50 pb-100 rmt-30 rpb-70 rel z-1 overflow-hidden py-60 rpy-100 mb-4"
        style={{ backgroundColor: "Silver" }}
      >
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Customers</span>
            <h2>Our Customers</h2>
          </div>
          <div>
            <Slider {...partnerSlider} className="service-three-slider">
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-3s">
                    <img
                      src="assets/images/partners/discover.png"
                      alt="discover"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-4s">
                    <img src="assets/images/partners/ford.png" alt="ford" />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-4s">
                    <img src="assets/images/partners/sony.png" alt="sony" />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-5s">
                    <img
                      src="assets/images/partners/lexmark.png"
                      alt="lexmark"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-6s">
                    <img
                      src="assets/images/partners/blackveatech.png"
                      alt="blackveatech"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/manitowoc.png"
                      alt="manitowoc"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/fedex.png" alt="FedEx" />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/generalmotors.png"
                      alt="General Motors"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/exelon.png" alt="exelon" />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/amgen.png" alt="amgen" />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/calx.png" alt="calx" />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/bobazona.png"
                      alt="bobazona"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/cummins.png"
                      alt="cummins"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/navitas.png"
                      alt="navitas"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/royalepuppies.png"
                      alt="Royale Puppies"
                    />
                  </p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/opticalpro.png"
                      alt="Optical Pro"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/snpglobal.png"
                      alt="S&P Global"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/unitednations.png"
                      alt="united nations"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/deutschebank.png"
                      alt="deutsche bank"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/whirlpool.png"
                      alt="whirlpool"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/yankeegroup.png"
                      alt="yankee group"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/nielsen.png"
                      alt="nielsen"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/mylan.png" alt="mylan" />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/ultimategaragedoors.png"
                      alt="ultimate garage doors"
                    />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/pfizer.png" alt="pfizer" />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img src="assets/images/partners/bmw.png" alt="bmw" />
                  </p>
                </div>
              </div>{" "}
              <div className="col">
                <div>
                  <p className="partner-item wow fadeInUp delay-0-7s">
                    <img
                      src="assets/images/partners/netflix.png"
                      alt="netflix"
                    />
                  </p>
                </div>
              </div>{" "}
            </Slider>
          </div>
        </div>
      </section>
      {/* Partners Area end */}
    </Layout>
  );
};
export default About;

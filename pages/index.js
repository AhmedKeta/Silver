import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Meta from "@/components/Meta";
import { partnerSlider } from "@/src/sliderProps";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={1}>
      <Meta />
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div className="hero-content pt-115 pb-125 rpb-0 delay-0-4s wow fadeInRight">
                <h1>Your Vision, Our Expertise.</h1>
                <p>
                  Elevate Your Business with Cutting-edge Software and Marketing
                  Solutions Tailored to Your Growth.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Ready To Grow With Us ?{" "}
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                  <img
                    className="shape one"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div
                className="hero-images wow fadeInLeft"
                style={{
                  height: "45vmax",
                  width: "80vmax",
                  objectFit: "cover",
                  marginBottom: "0px",
                }}
              >
                <img
                  src="assets/images/hero/hero-one.png"
                  alt="Hero"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          {/* <div className="triangle-shape"></div> */}
        </div>
      </section>
      {/* Hero Section End */}
      {/* Partners Area start */}
      <section className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1 overflow-hidden py-130 rpy-100">
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
      {/* About Area start */}
      <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Crafting Digital Excellence, Together.</h2>
                </div>
                <p>
                  At silverpyramids, we're your partners in achieving digital
                  excellence. Through innovative strategies, we amplify your
                  brand's potential, crafting success together.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
                    </div>
                  </div>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Technology Solutions
                        </Link>
                      </h4>
                      <p>
                        Delivering tailored IT solutions that power your
                        business's growth journey.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Marketing Solutions
                        </Link>
                      </h4>
                      <p>
                        Fueling your brand's success with strategic marketing
                        prowess and creativity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="assets/images/about/about1.png"
                    alt="Silver Pyramids"
                  />
                  <img className="wow zoomIn delay-0-5s" />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="assets/images/about/about-dots.png"
                    alt="Silver Pyramids"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="assets/images/about/about2.jpg"
                    alt="Silver Pyramids"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Project Area start */}
      <section className="project-area overflow-hidden bgc-lighter pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Learn Our Project</span>
            <h2>Our Work Does the Talking</h2>
          </div>
          <Slider {...projectSliderActive} className="project-slider-active">
            <div className="project-slider-item">
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <div className="content">
                <h4>
                  High successful Sa video platform with a patented technology
                  used by global enterprises.
                </h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
                <ul className="list-style-one">
                  <li>Bringing new IT solutions to the market</li>
                  <li>To be included the list of the best 100 IT companies</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    View Details <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="project-slider-item">
              <div className="content">
                <h4>
                  High successful Sa video platform with a patented technology
                  used by global enterprises.
                </h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment so blinded by desire
                </p>
                <ul className="list-style-one">
                  <li>Bringing new IT solutions to the market</li>
                  <li>To be included the list of the best 100 IT companies</li>
                </ul>
                <Link legacyBehavior href="/project-details">
                  <a className="theme-btn style-two mt-15">
                    View Details <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="video">
                <img
                  src="assets/images/projects/project-video.png"
                  alt="Video"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>
      {/* Project Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best IT Services</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="digital-details">
                      Digital Consulting
                    </Link>
                  </h4>
                  <p>
                    We provide comprehensive digital consulting services to help
                    businesses thrive and overcome challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="development-details">
                      Design &amp; Development
                    </Link>
                  </h4>
                  <p>
                    Our skilled team excels in designing and developing
                    innovative solutions tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="mobile-details">
                      Mobile App Solutions
                    </Link>
                  </h4>
                  <p>
                    We specialize in creating cutting-edge mobile applications
                    that deliver exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="uiux-details">
                      UX/UI Design Strategy
                    </Link>
                  </h4>
                  <p>
                    Our UX/UI design strategies are aimed at creating visually
                    appealing and user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo-1" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="seo-details">
                      SEO Optimization
                    </Link>
                  </h4>
                  <p>
                    We offer comprehensive SEO optimization services to enhance
                    your online visibility and drive organic traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-creativity" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="visual-content-details">
                      Visual Content Services
                    </Link>
                  </h4>
                  <p>
                    Engage your audience with captivating visuals that drive
                    results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-social-media" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="social-media-details">
                      Social Media Advertising
                    </Link>
                  </h4>
                  <p>
                    Connect, engage, and build brand loyalty through strategic
                    social media campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-megaphone" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="marketing-details">
                      Marketing strategies
                    </Link>
                  </h4>
                  <p>
                    Create compelling content to boost brand awareness and
                    audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discover</h4>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Planning</h4>
                  <p>
                    Our design approach is to simplify. We embrace creating
                    something.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Design &amp; Dev</h4>
                  <p>
                    At this step, we cater to requirement backed web services
                    developmenc
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Testing</h4>
                  <p>
                    On the other denounce with righteou indignation dislike
                    beguile demore
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Project Deliver</h4>
                  <p>
                    We denounce righteous indignation and dislike men who
                    beguiled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Team Area start */}
      <section className="team-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-2s">
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
              <div className="team-member wow fadeInUp delay-0-4s">
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
              <div className="team-member wow fadeInUp delay-0-6s">
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
              <div className="team-member wow fadeInUp delay-0-8s">
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
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area rel z-2">
        <div className="container">
          <div
            className="statistics-inner bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Our Statistics</span>
                    <h2>Learn About Our Company Statistics</h2>
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
                      <span className="counter-title">Project Complete</span>
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
                      <span className="counter-title">Clients Happy</span>
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
      {/* Break Start */}
      <section className="price-plan-area bgc-lighter mt-30 rmt-0 pt-220 pb-100 rpb-70 rel z-1">
        <div className="price-shapes">
          <img
            className="shape two"
            src="assets/images/shapes/price-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Break End */}
      {/* Testimonials Area start */}
      <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.png"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  />
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
    </Layout>
  );
};
export default Index;

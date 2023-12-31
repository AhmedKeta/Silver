import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import Meta from "@/components/Meta";

const Services = () => {
  return (
    <Layout>
      <Meta
        title="Technology Solutions"
        description="Explore our technology services at Silver Pyramids. From digital consulting to design and development, we provide innovative solutions tailored to your business needs."
        keywords="technology services, digital consulting, design and development, mobile app development, UX/UI design strategy, SEO optimization services"
      />
      <PageBanner
        hero={"/assets/images/hero/technology-solution.webp"}
        pageName={"Services"}
        pageTitle={"Technology Solutions"}
      />

      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Our Approach</span>
          <h2>Implementing Industry Best Practices</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="/assets/images/shapes/work-process-line.webp" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discovery</h4>
                  <p>
                    We prioritize thorough planning and documentation, leaving
                    nothing to assumptions.
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
                    Our design approach is centered around simplicity. We strive
                    to create something remarkable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Design &amp; Development</h4>
                  <p>
                    At this stage, we focus on developing technology services
                    that align with your requirements.
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
                    We thoroughly test our solutions to ensure they meet the
                    highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Project Delivery</h4>
                  <p>
                    We deliver projects with utmost professionalism, ensuring
                    client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}

      {/* Services Area start */}
      <section className="services-area bgc-lighter pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Explore Our Services</span>
                <h2>Exceptional Technology Solutions</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-brainstorming" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="digital-details">
                      Digital Transforming & Consulting
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
                      Mobile App Development
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
                      SEO Optimization Services
                    </Link>
                  </h4>
                  <p>
                    We offer comprehensive SEO optimization services to enhance
                    your online visibility and drive organic traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}

      {/* Customer Satisfaction Area start */}
      <section className="satisfaction-area-two mt-30 py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cs-content-part rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-15">
                  <span className="sub-title mb-15">
                    Guaranteed Customer Satisfaction
                  </span>
                  <h2>Assured Customer Satisfaction in Technology Solutions</h2>
                </div>
                <p>
                  Backed by years of expertise, we proudly assure absolute
                  contentment. Our track record of excellence, coupled with
                  partnerships with industry giants, reflects our dedication to
                  delivering unparalleled technology solutions that are truly
                  satisfying.
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-trust" />
                      </div>
                      <h4>
                        <div href="service-details">
                          Your Most Trusted Partner
                        </div>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-technical-support" />
                      </div>
                      <h4>
                        <div href="service-details">
                          Superior Technical Support
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-image-part ps-0 mb-30 wow fadeInRight delay-0-2s">
                <div className="image">
                  <img
                    src="/assets/images/about/satisfaction-two.webp"
                    alt="Satisfaction"
                  />
                </div>
                <div className="experience-years">
                  <h4>78+ Years Of Experience in our team</h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Services;

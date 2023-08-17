import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Meta from "@/components/Meta";
import MarketingService from "@/src/components/MarketingService";
import { marketingServices } from "@/src/services";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Service2 = () => {
  return (
    <Layout>
      <Meta
        title="Marketing Solutions"
        description="Enhance your online presence with our marketing services at Silver Pyramids. We specialize in visual content services, SEO optimization, and social media advertising to help you reach your target audience effectively."
        keywords="marketing services, visual content services, SEO optimization, social media advertising"
      />
      <PageBanner
        hero={"/assets/images/hero/marketing-services.webp"}
        pageName={"Services"}
        pageTitle="Marketing Solutions"
      />
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
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <div>
                      <h4>Trusted Partner</h4>
                    </div>
                    <p>
                      We have built a strong reputation as a trusted partner for
                      businesses of all sizes. With our extensive experience and
                      a dedicated team, we provide reliable and effective
                      marketing solutions.
                    </p>
                  </div>
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-support" />
                    </div>
                    <div>
                      <h4>Technical Support</h4>
                    </div>
                    <p>
                      Our technical support team is available to assist you with
                      any issues or concerns you may have.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-megaphone" />
                    </div>
                    <div>
                      <h4>Digital Marketing</h4>
                    </div>
                    <p>
                      Our digital marketing services help businesses establish a
                      strong online presence and reach their target audience
                      effectively.
                    </p>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <div>
                      <h4>Social Media Marketing</h4>
                    </div>
                    <p>
                      Harness the power of social media to reach your target
                      audience and build brand awareness. Our social media
                      marketing strategies will help you engage with your
                      customers and drive conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.webp" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section
        className="statistics-area-four text-white bgs-cover pt-80 pb-20"
        style={{
          backgroundImage:
            "url(assets/images/background/statistics-three.webp)",
        }}>
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">
                    Silver Pyramids Statistics
                  </span>
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
                      data-speed={5000}
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
      </section>
      {/* Statistics Area end */}
      {/* What We Provide Area Start */}
      <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">What We Provide</span>
            <h2>Marketing, Content, and Media Services</h2>
          </div>
          <section className="project-grid-area rel z-2 py-130 rpy-100">
            <div class="container">
              <div class="row justify-content-center">
                {marketingServices.map((service) => (
                  <MarketingService
                    page={service.page}
                    title={service.title}
                    image={service.image}></MarketingService>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="about-bg-shape">
          <img
            src="assets/images/background/what-we-provide.webp"
            alt="Shape"
          />
        </div>
      </section>
      {/* What We Provide Area End */}
    </Layout>
  );
};
export default Service2;

import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";
import Meta from "@/components/Meta";
import accordionData from "@/src/marketingAccordion";

const ServiceDetails = () => {
  return (
    <Layout>
      <Meta
        title="Marketing Services"
        description="Enhance your online presence with our marketing services at Silver Pyramids. We specialize in visual content services, SEO optimization, and social media advertising to help you reach your target audience effectively."
        keywords="marketing services, visual content services, SEO optimization, social media advertising"
      />
      <PageBanner
        pageName={"Marketing Services"}
        pageTitle={"Marketing Strategies"}
        hero={"/assets/images/hero/Marketing.webp"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>Marketing Strategies</h2>
                </div>
                <p>
                  Unlock the power of effective marketing strategies to propel
                  your business forward. Our team of seasoned marketing experts
                  combines data-driven insights and creative thinking to devise
                  comprehensive strategies tailored to your unique goals. From
                  brand positioning to customer acquisition, we help you
                  navigate the dynamic marketing landscape with confidence.
                </p>
                <p>
                  With a deep understanding of consumer behavior and market
                  trends, we develop customized marketing plans that maximize
                  your ROI. Whether you're looking to build brand awareness,
                  drive website traffic, or generate leads, our strategies are
                  designed to deliver measurable results and create a lasting
                  impact.
                </p>
                <p>
                  Our client-centric approach ensures that we align our
                  strategies with your business objectives, target audience, and
                  budget. We leverage a mix of traditional and digital marketing
                  channels, including social media, content marketing, email
                  campaigns, and more, to create a holistic approach that drives
                  engagement and conversions.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/strategy.webp"
                    alt="Service Details"
                  />
                </div>
                {/* First Paragraph */}
                {/*  */}
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>
                      We Provide Best Digital Services to Grow your Business
                    </h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Trusted Partner</li>
                      <li>Technical Support</li>
                      <li>Digital Marketing</li>
                      <li>Social Media Marketing</li>
                    </ul>
                  </div>
                </div>
                <JeenaAccordion2 accordionsData={accordionData} />
              </div>
            </div>

            {/* Side content start */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                {/* Services */}
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="visual-content-details">
                        Visual Content Services
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="social-media-details">
                        Social Media Advertising
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="seo-details">
                        SEO - SEM
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="sms-details">
                        Email & SMS
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="house-content-details">
                        In-House Content Creation
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="cro-details">
                        CRO
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(/assets/images/widgets/cta-widget-bg.webp)",
                  }}>
                  <span className="h5">Let's Work Together</span>
                  <span className="h2" style={{ color: "white" }}>
                    Marketing Service Agency
                  </span>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+1 630-995-9223" className="number">
                    <i className="fas fa-phone" /> +1 630-995-9223
                  </a>
                  <img
                    className="bg-shape"
                    src="/assets/images/widgets/cta-bg-lines.webp"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="/assets/images/services/infographic.webp"
                  alt="Service"
                />
              </div>
              {/* Previous */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="visual-content-details">
                    Visual Content Services
                  </Link>
                </h4>
                <Link legacyBehavior href="/visual-content-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Previous End */}
            </div>
            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              {/* Next */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="seo-details">
                    SEO - SEM
                  </Link>
                </h4>
                <Link legacyBehavior href="/seo-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Next End */}
              <div className="image">
                <img src="/assets/images/services/seo.webp" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;

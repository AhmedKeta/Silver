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
        title="Visual Content Services"
        description="Elevate your brand with our visual content services at Silver Pyramids. We create captivating visuals that engage and communicate your message effectively."
        keywords="visual content services, graphic design, branding, visual communication"
      />
      <PageBanner
        pageName={"Visual Content Services"}
        pageTitle={"Visual Content Services"}
        hero={"/assets/images/hero/Visual.webp"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>Visual Content Services</h2>
                </div>
                <p>
                  Embrace the future with our transformative Digital Consulting
                  Services. Our seasoned experts collaborate with you to
                  navigate the dynamic digital landscape. From devising agile
                  strategies to harnessing emerging technologies, we tailor
                  solutions that resonate with your unique goals.
                </p>
                <p>
                  Whether it's optimizing operational efficiencies, enhancing
                  customer experiences, or unlocking new growth opportunities,
                  our consulting team is your compass. We delve into data-driven
                  insights, streamline processes, and craft innovation roadmaps.
                </p>
                <p>
                  With a client-centric approach, we've empowered diverse
                  businesses across industries to thrive in the digital realm.
                  Partner with us to leverage the full potential of technology
                  and reshape your success story.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/infographic.webp"
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
                      <Link legacyBehavior href="social-media-details">
                        Social Media Advertising
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="marketing-details">
                        Marketing strategies
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="seo-details">
                        SEO - SEM
                      </Link>
                    </li>{" "}
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
                      "url(assets/images/widgets/cta-widget-bg.webp)",
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
                    src="assets/images/widgets/cta-bg-lines.webp"
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
                  src="assets/images/services/social-media.webp"
                  alt="Service"
                />
              </div>
              {/* Previous */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="social-media-details">
                    Social Media Advertising
                  </Link>
                </h4>
                <Link legacyBehavior href="/social-media-details">
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
                  <Link legacyBehavior href="marketing-details">
                    Marketing strategies
                  </Link>
                </h4>
                <Link legacyBehavior href="/marketing-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Next End */}
              <div className="image">
                <img src="assets/images/services/strategy.webp" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;

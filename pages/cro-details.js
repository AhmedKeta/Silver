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
        title="Conversion Rate Optimization"
        description="Increase your website's conversion rate with our expert Conversion Rate Optimization (CRO) services. Learn how our team of specialists can analyze your website, identify areas for improvement, and implement strategies to maximize your conversions."
        keywords="conversion rate optimization, CRO services, increase conversion rate, website optimization, conversion optimization"
      />
      <PageBanner
        hero={"/assets/images/hero/Conversion-Rate-Optimization_1.webp"}
        pageName={"CRO Services"}
        pageTitle={"Conversion Rate Optimization"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>Conversion Rate Optimization</h2>
                </div>
                <p>
                  Increase your website's conversion rate with our expert
                  Conversion Rate Optimization (CRO) services. At Silver
                  Pyramids, we understand that driving traffic to your website
                  is only half the battle. It's equally important to ensure that
                  the visitors take the desired actions and convert into leads
                  or customers. Our dedicated team of CRO specialists can help
                  you achieve higher conversion rates and maximize the return on
                  your marketing investments.
                </p>
                <p>
                  Our CRO process starts with a comprehensive analysis of your
                  website, including user behavior, conversion funnels, and
                  landing pages. We identify areas of improvement and develop
                  data-driven strategies to optimize your website for better
                  conversions. Whether it's improving your website's design,
                  optimizing landing pages, implementing persuasive
                  call-to-actions, or streamlining the checkout process, we
                  tailor our approach to meet your specific goals and target
                  audience.
                </p>
                <p>
                  Throughout the optimization process, we continuously monitor,
                  test, and refine our strategies to ensure optimal results. Our
                  team utilizes advanced analytics tools, heatmaps, click
                  tracking, and A/B testing to gather insights and make
                  data-backed decisions. By iterating and optimizing your
                  website based on user behavior and feedback, we can help you
                  increase engagement, reduce bounce rates, and ultimately drive
                  more conversions.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/Conversion-Rate-Optimization-2_1.webp"
                    alt="Service Details"
                  />
                </div>
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
                      <Link legacyBehavior href="marketing-details">
                        Marketing strategies
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
                  src="assets/images/services/Email-_-SMS-square.webp"
                  alt="Service"
                />
              </div>
              {/* Previous */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="sms-details">
                    Email & SMS
                  </Link>
                </h4>
                <Link legacyBehavior href="/sms-details">
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
                  <Link legacyBehavior href="house-content-details">
                    In-House Content Creation
                  </Link>
                </h4>
                <Link legacyBehavior href="/house-content-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Next End */}
              <div className="image">
                <img
                  src="assets/images/services/in-house-content-creation.webp"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;

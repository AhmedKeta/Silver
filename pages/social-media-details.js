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
        title="Social Media Services"
        description="Amplify your brand reach through social media advertising with Silver Pyramids. Our targeted campaigns help you connect with your audience and achieve maximum impact."
        keywords="social media advertising, social media marketing, audience targeting, brand reach"
      />
      <PageBanner
        pageName={"Social Media Services"}
        pageTitle={"Social Media Advertising"}
        hero={"/assets/images/hero/Social.webp"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>Social Media Advertising</h2>
                </div>
                <p>
                  Harness the power of social media to connect with your target
                  audience and drive meaningful business results. Our social
                  media advertising services are designed to help you reach,
                  engage, and convert your audience across popular platforms
                  such as Facebook, Instagram, Twitter, and LinkedIn.
                </p>
                <p>
                  Our team of social media experts understands the nuances of
                  each platform and develops tailored advertising strategies
                  that align with your business objectives. Whether you want to
                  increase brand awareness, drive website traffic, or generate
                  leads, we leverage advanced targeting options and captivating
                  ad creatives to maximize your campaign's impact.
                </p>
                <p>
                  We begin by defining your target audience and understanding
                  their preferences, interests, and behaviors. This enables us
                  to create highly targeted campaigns that resonate with your
                  audience and deliver measurable results. We continuously
                  monitor and optimize your campaigns to ensure that you get the
                  best return on your advertising investment.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/social-media.webp"
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
                <img src="assets/images/services/seo.webp" alt="Service" />
              </div>
              {/* Previous */}
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
              {/* Previous End */}
            </div>
            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              {/* Next */}
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
              {/* Next End */}
              <div className="image">
                <img
                  src="assets/images/services/infographic.webp"
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

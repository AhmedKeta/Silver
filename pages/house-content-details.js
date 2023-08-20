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
        title="In-House Content Creation"
        description="Take advantage of our top-notch in-house content creation services to produce high-quality and engaging content for your brand. Learn how our experienced team can help you create compelling content that resonates with your target audience."
        keywords="in-house content creation, content creation services, high-quality content, engaging content, brand content"
      />
      <PageBanner
        hero={"/assets/images/hero/in-house-content-creation-hero.webp"}
        pageName={"In-House Content Creation"}
        pageTitle={"In-House Content Creation"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>In-House Content Creation</h2>
                </div>
                <p>
                  Take advantage of our top-notch in-house content creation
                  services to produce high-quality and engaging content for your
                  brand. At Silver Pyramids, we understand the importance of
                  content in capturing and retaining your audience's attention.
                  Our experienced team of content creators specializes in
                  creating compelling content that resonates with your target
                  audience.
                </p>
                <p>
                  We offer a range of in-house content creation services,
                  including blog posts, articles, social media content, website
                  copy, and more. Our team works closely with you to understand
                  your brand's voice, tone, and messaging, ensuring that the
                  content we create aligns with your brand identity and
                  objectives.
                </p>
                <p>
                  With our in-house content creation services, you can expect
                  well-researched, informative, and engaging content that drives
                  results. We leverage industry best practices and stay
                  up-to-date with the latest trends to create content that
                  stands out in today's competitive digital landscape.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/in-house-content-creation.webp"
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
                      <Link legacyBehavior href="marketing-details">
                        Marketing strategies
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
                  src="/assets/images/services/Conversion-Rate-Optimization-2_1.webp"
                  alt="Service"
                />
              </div>
              {/* Previous */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="cro-details">
                    CRO
                  </Link>
                </h4>
                <Link legacyBehavior href="/cro-details">
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
              {/* Next End */}
              <div className="image">
                <img
                  src="/assets/images/services/Email-_-SMS-square.webp"
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

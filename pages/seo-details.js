import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";
import Meta from "@/components/Meta";

const ServiceDetails = () => {
  // Accordion Questions Section
  const accordionData = [
    {
      id: 1,
      title: "Why Get Our IT Services?",
      answer:
        "Experience unmatched IT services with us. We blend expertise and innovation to optimize your operations, boost efficiency, and ensure security. Elevate your business with our strategic technological solutions.",
    },
    {
      id: 2,
      title: "BestTeam Member Provider?",
      answer:
        "We take pride in being your premier team member provider. Our exceptional talent pool, curated for your unique needs, fuels innovation, accelerates projects, and drives your company's success.",
    },
    {
      id: 3,
      title: "Learn About Our Company?",
      answer:
        "Discover our company's essence. With a blend of experience and innovation, we're committed to delivering top-tier solutions. Unveil our journey, values, and expertise, and join us in shaping excellence.",
    },
  ];
  return (
    <Layout>
      <Meta title="SEO Services" />
      <PageBanner pageName={"SEO Services"} pageTitle={"SEO Optimization"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>SEO Optimization</h2>
                </div>
                <p>
                  Boost your online presence and drive organic traffic to your
                  website with our expert SEO optimization services. Our team of
                  SEO specialists stays up-to-date with the latest search engine
                  algorithms and best practices to ensure that your website
                  ranks higher in search results and reaches your target
                  audience effectively.
                </p>
                <p>
                  We start with a comprehensive SEO audit and analysis of your
                  website to identify opportunities for improvement. From
                  optimizing on-page elements such as meta tags, headings, and
                  content structure to enhancing site speed, mobile
                  responsiveness, and user experience, we leave no stone
                  unturned in maximizing your website's visibility and
                  performance.
                </p>
                <p>
                  Keyword research and optimization are at the core of our SEO
                  strategy. We identify relevant keywords and phrases that your
                  target audience is searching for and integrate them
                  strategically into your website's content. This helps search
                  engines understand the relevance of your website and improves
                  its ranking for those keywords.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                {/* First Paragraph */}
                {/*  */}
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>
                      We Provide Best Digital Services to Growth you Business
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
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      In addition to on-page optimization, we also focus on
                      building high-quality backlinks from reputable websites.
                      This helps improve your website's authority and
                      credibility in the eyes of search engines, further
                      boosting its ranking.
                    </p>
                    <p>
                      With our SEO optimization services, your website will not
                      only rank higher in search results but also attract
                      relevant, highly engaged visitors who are more likely to
                      convert into customers. Stay ahead of the competition and
                      enhance your online visibility with our proven SEO
                      strategies.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  At the heart of operational excellence lies effective Service
                  Management. Our seasoned professionals excel in streamlining
                  processes, optimizing resource allocation, and ensuring
                  seamless service delivery. With a client-centered approach, we
                  design tailored service frameworks that align with your
                  business objectives. From incident resolution to service level
                  agreement (SLA) adherence, we orchestrate every facet,
                  allowing you to focus on core business functions while
                  experiencing elevated service quality and customer
                  satisfaction.
                </p>
                {/*  */}

                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion">
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
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
                      <Link legacyBehavior href="marketing-details">
                        Marketing strategies
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="seo-details">
                        SEO Optimization
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}>
                  <span className="h5">Let's Work Together</span>
                  <span className="h2" style={{ color: "white" }}>
                    Technology Service Agency
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
                    src="assets/images/widgets/cta-bg-lines.png"
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
                  src="assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              {/* Previous */}
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
              {/* Previous End */}
            </div>
            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              {/* Next */}
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
              {/* Next End */}
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
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

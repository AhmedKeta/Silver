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
      title: "Why Get Our Technology Services?",
      answer:
        "Experience unmatched Technology services with us. We blend expertise and innovation to optimize your operations, boost efficiency, and ensure security. Elevate your business with our strategic technological solutions.",
    },
    {
      id: 2,
      title: "Best Team Member Provider?",
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
      <Meta
        title="Digital Transformation & Consulting Service"
        description="Leverage our digital consulting services at Silver Pyramids to navigate the ever-changing digital landscape. Our expert consultants provide strategic guidance and insights to drive your business forward."
        keywords="digital consulting services, strategic guidance, digital transformation, business insights"
      />
      <PageBanner
        pageName={"Digital Services"}
        pageTitle={"Digital Transformation & Consulting Services"}
        hero={"/assets/images/hero/Digital.webp"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                {/* First Paragraph */}
                <div className="section-title mb-30">
                  <h2>Digital Transformation & Consulting Services</h2>
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
                    src="assets/images/about/support.webp"
                    alt="Service Details"
                  />
                </div>
                {/* First Paragraph */}
                {/*  */}
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>
                      We Provide Best Technology Solutions to Grow your
                      Business
                    </h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research &amp; Planning</li>
                      <li>Wireframing &amp; Prototyping</li>
                      <li>E-commerce Consulting</li>
                      <li>Data Analytics and Insights</li>
                    </ul>
                  </div>
                </div>
                {/*  */}

                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
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
                      <Link legacyBehavior href="development-details">
                        Design & Development
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="mobile-details">
                        Mobile Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="uiux-details">
                        UX/UI Design Strategy
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
                      "url(assets/images/widgets/cta-widget-bg.webp)",
                  }}
                >
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
                <img src="assets/images/about/design.webp" alt="Service" />
              </div>
              {/* Previous */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="development-details">
                    Design & Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/development-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Previous End */}
            </div>
            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              {/* Next */}
              <div className="content">
                <h4>
                  <Link legacyBehavior href="mobile-details">
                    Mobile Apps Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/mobile-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              {/* Next End */}
              <div className="image">
                <img src="assets/images/about/app.webp" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;

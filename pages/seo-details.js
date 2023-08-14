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
      <Meta
        title="SEO Optimization Services"
        description="Improve your website's organic visibility with our SEO optimization services at Silver Pyramids. We employ industry best practices to enhance search engine rankings and drive targeted traffic to your site."
        keywords="SEO optimization services, search engine optimization, organic visibility, targeted traffic"
      />
      <PageBanner
        pageName={"SEO Services"}
        pageTitle={"SEO Optimization Services"}
      />
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
                  Unlock unparalleled online visibility with our SEO
                  Optimization Services. We elevate your digital footprint by
                  fine-tuning strategies that enhance search engine rankings and
                  drive organic traffic. Our data-driven approach targets
                  relevant keywords, optimizing content and structure for peak
                  performance. From on-page enhancements to off-page authority
                  building, we navigate the ever-changing SEO landscape. Partner
                  with us to rise through the ranks, connecting your brand with
                  the right audience and maximizing your online potential.
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
                      We Provide Best Technology Solutions to Growth you
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
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Unlock business potential with our comprehensive Digital
                      Consulting Services. From devising winning digital
                      strategies and enhancing user experiences to cybersecurity
                      readiness and harnessing the power of data analytics, we
                      offer a suite of solutions that drive growth. Whether it's
                      embracing new technologies or optimizing existing ones,
                      our expert guidance ensures your journey towards digital
                      excellence is smooth and rewarding.
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
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="digital-details">
                        Digital Solutions
                      </Link>
                    </li>
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
                  <Link legacyBehavior href="uiux-details">
                    UX/UI Design Strategy
                  </Link>
                </h4>
                <Link legacyBehavior href="/uiux-details">
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

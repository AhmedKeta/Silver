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
        title="Mobile Development"
        description="Stay ahead of the mobile-first era with our mobile app development services at Silver Pyramids. We build intuitive and feature-rich mobile applications for various platforms, ensuring seamless user experiences."
        keywords="mobile app development, iOS app development, Android app development, cross-platform apps"
      />
      <PageBanner
        pageName={"Mobile Services"}
        pageTitle={"Mobile App Development"}
      />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Mobile Apps Development</h2>
                </div>
                <p>
                  Empower your business with Mobile App Development that sets
                  you apart. Our team creates dynamic, user-centric apps across
                  platforms, amplifying engagement and accessibility. From
                  concept to launch, we fuse innovation and functionality to
                  ensure your app resonates with your audience. Seamlessly
                  navigating the ever-evolving mobile landscape, we bring your
                  ideas to life. Elevate user experiences and expand your reach
                  in the digital realm with our expertly crafted mobile
                  solutions.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
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
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion">
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
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
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}>
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
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
            </div>
            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="seo-details">
                    SEO Optimization
                  </Link>
                </h4>
                <Link legacyBehavior href="/seo-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
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

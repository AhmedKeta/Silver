import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import JeenaAccordion from "@/src/components/JeenaAccordion";
import { Nav, Tab } from "react-bootstrap";
import Meta from "@/components/Meta";

const Faq = () => {
  return (
    <Layout>
      <Meta title="Terms and Conditions" />
      <PageBanner
        hero={"/assets/images/hero/terms.png"}
        pageName={"Terms and Conditions"}
      />
      <section className="faq-page-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="section-title mb-45">
            <h2>Silver Pyramids Terms and Conditions</h2>
          </div>
          {/* Terms Start */}
          <div></div>
          {/* Terms End */}
        </div>
      </section>
      {/* FAQs Area end */}
      {/* Contact Form Section Start */}
      <section className="contact-form-area py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Get In Touch With Us</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          send message <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/about/faq-page.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Faq;

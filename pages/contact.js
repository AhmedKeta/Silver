import PageBanner from "@/components/PageBanner";
import Meta from "@/components/Meta";
import Layout from "@/layout";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import sendEmail from "@/src/sendMail";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [visibleReCAPTCHA, setVisibleReCAPTCHA] = useState(false);
  const [visibleSubmit, setVisibleSubmit] = useState(true);
  const recaptchaRef = React.createRef();
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendContactEmail = () => {
    setVisibleReCAPTCHA((visibleReCAPTCHA) => !visibleReCAPTCHA);
    setVisibleSubmit((visibleSubmit) => !visibleSubmit);
  };

  const handleRecaptchaChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    // recaptchaRef.current.reset();
    setVisibleReCAPTCHA((visibleReCAPTCHA) => !visibleReCAPTCHA);
    setVisibleSubmit((visibleSubmit) => !visibleSubmit);
    try {
      await sendEmail(
        formData,
        setSuccessMessage,
        setErrorMessage,
        setFormData
      );
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(error);
    }
  };

  return (
    <Layout>
      <Meta
        title="Contact Us"
        description="Have questions or inquiries? Get in touch with Silver Pyramids. Contact our team today for personalized technology and marketing solutions tailored to your business."
        keywords="contact us, get in touch, technology solutions, marketing services"
      />
      <PageBanner
        hero={"/assets/images/hero/contact.webp"}
        pageName={"Contact Us"}
      />
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <h2>Contact Information</h2>
              </div>
              <p>
                Let us tailor a service package that meets your needs. Tell us a
                little about your business, and we will get in touch with you as
                soon as possible.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="justify-content-center col-md-6 col-12">
              <div class="row">
                <div className="col-xl-6">
                  <div className="contact-info-box wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <h4>Headquarter</h4>
                    <span
                      style={{ fontSize: 14, textAlign: "center" }}
                      className="col-12"
                    >
                      <span style={{ fontWeight: "bold" }}>Phoenix,</span>{" "}
                      Arizona, USA
                    </span>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-info-box wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="fal fa-envelope-open" />
                    </div>
                    <h4>Email Us</h4>
                    <a
                      className="col-12"
                      style={{ fontSize: 14 }}
                      href="mailto:info@silverpyramids.com"
                    >
                      info@silverpyramids.com
                    </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-info-box wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="fal fa-phone-plus" />
                    </div>
                    <h4>Call Us</h4>
                    <span className="col-12" style={{ fontSize: 14 }}>
                      Phone:{" "}
                      <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
                    </span>
                    <span></span>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-info-box wow fadeInUp delay-0-5s">
                    <div className="icon">
                      <i className="fal fa-clock" />
                    </div>
                    <h4 className="working">Working Hour</h4>
                    <span class="col-12">
                      <b style={{ fontSize: 14 }}>Monday - Friday, </b>
                      <span style={{ fontSize: 14 }}>
                        09:00am - 05:00pm (PST)
                      </span>
                    </span>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div class="col-md-6 contact">
              <img src="assets/images/about/map.webp"></img>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100 pt-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch With Us</span>
                  <h2>Send Us Message</h2>
                </div>
              </div>
            </div>
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendContactEmail();
              }}
              id="contactForm"
              className="contactForm"
              name="contactForm"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
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
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center mb-0">
                    {visibleReCAPTCHA && (
                      <ReCAPTCHA
                        className="g-recaptcha"
                        ref={recaptchaRef}
                        onSubmit={(value) => console.log(value)}
                        sitekey="6LeSma8nAAAAAEkfttC5BzD3UjnzCiO76HazegmU"
                        onChange={handleRecaptchaChange}
                      />
                    )}
                    {visibleSubmit && (
                      <button type="submit" className="theme-btn style-two">
                        send message <i className="far fa-long-arrow-right" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;

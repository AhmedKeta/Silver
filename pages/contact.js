import PageBanner from "@/components/PageBanner";
import Meta from "@/components/Meta";
import Layout from "@/layout";
// import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import sendEmail from "@/src/sendMail";

const Contact = () => {
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

  const sendContactEmail = async () => {
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

  // const sendEmail = async () => {
  //   try {
  //     const templateParams = {
  //       to_name: "Silver Pyramids Customer Service",
  //       email_subject: formData.subject,
  //       from_name: formData.name,
  //       from_email: formData.email,
  //       phone_number: formData.phone_number,
  //       message: formData.message,
  //     };

  //     await emailjs.send(
  //       "service_8fq77ww",
  //       "template_vxg5ly6",
  //       templateParams,
  //       "fa0OAKPqt9dfpP_bg"
  //     );

  //     setSuccessMessage("Your message has been sent successfully");
  //     setErrorMessage("");
  //     setFormData({
  //       name: "",
  //       phone_number: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     setSuccessMessage("Your message has been sent successfully");
  //     setErrorMessage("");
  //   }
  // };

  return (
    <Layout>
      <Meta title="Contact Us" />
      <PageBanner pageName={"Contact Us"} />
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Helps</span>
                <h2>Contact Informations</h2>
              </div>
              <p>
                Let us tailor a service package that meets your needs. Tell us a
                little about your business, and we will get back to you with
                some ideas as soon as possible.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Location</h4>
                <span style={{ fontSize: 14 }}>
                  13118 W San Miguel Ave, Litchfield Park, AZ 85340, USA
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a
                  style={{ fontSize: 14 }}
                  href="mailto:info@silverpyramids.com"
                >
                  info@silverpyramids.com
                </a>
                <br />
                <br />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Call Us</h4>
                <span style={{ fontSize: 14 }}>
                  Phone: <a href="callto:+1 630-995-9223">+1 630-995-9223</a>
                </span>
                <br />
                <span>
                  <br />
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b style={{ fontSize: 14 }}>Monday _ Friday,</b>
                <span style={{ fontSize: 14 }}>09:00am - 05:00pm (PST)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57066.317998691055!2d-112.38962475962514!3d33.53046621941129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b4729051b136d%3A0xc44d06acbde01f2c!2s13118%20W%20San%20Miguel%20Ave%2C%20Litchfield%20Park%2C%20AZ%2085340%2C%20USA!5e1!3m2!1sen!2seg!4v1691500440982!5m2!1sen!2seg"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Send Us Message</h2>
                </div>
                <p>
                  Let us tailor a service package that meets your needs. Tell us
                  a little about your business, and we will get back to you with
                  some ideas as soon as possible.
                </p>
              </div>
            </div>
            {successMessage && <Alert variant="dark">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendContactEmail();
              }}
              id="contactForm"
              className="contactForm"
              action="assets/php/form-process.php"
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
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
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

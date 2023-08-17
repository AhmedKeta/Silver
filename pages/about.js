import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Meta from "@/components/Meta";
import PartnerSlider from "@/components/slider/PartnerSlider";

const About = () => {
  return (
    <Layout>
      <Meta
        title="Silver Pyramids Story"
        description="Learn more about Silver Pyramids. We are a leading provider of technology and marketing solutions, committed to helping businesses thrive in the digital landscape."
        keywords="about us, technology solutions, marketing services, digital landscape"
      />
      <PageBanner
        hero={"/assets/images/hero/about-us.webp"}
        pageName={"Silver Pyramids Story"}
      />
      {/* our story start */}
      <section
        className="contact-form-area py-20 rpy-100 bgs-cover mb-4"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.webp)",
        }}>
        <section className="about-area-two py-20 rpy-100 rel z-1">
          <div className="container">
            <div className="row align-items-center gap-90">
              <div className="col-lg-6">
                <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                  <img src="/assets/images/logos/logo-big.webp" alt="About" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Our Story</span>
                    <h2>
                      Pioneering Digital Transformation: 23 Years of Crafting
                      Online Success Stories
                    </h2>
                  </div>
                  <p>
                    Over two decades ago, we embarked on a journey driven by the
                    evolving digital landscape. Recognizing the burgeoning need
                    for online presence, we founded a software solutions and
                    marketing company.
                  </p>
                  <p>
                    As the internet became intrinsic to modern life, we
                    positioned ourselves at the forefront, offering
                    comprehensive website development services. With time, our
                    vision expanded to encompass the demand for effective online
                    promotion. Thus, our marketing division took shape, enabling
                    us to propel clients' websites to new heights.
                  </p>
                  <p>
                    Today, after 23 years of innovation and adaptation, we stand
                    as a testament to our commitment to transforming businesses
                    in the digital age, continually shaping success stories
                    through cutting-edge solutions and unwavering dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* our story end */}
      {/* Team Area start */}
      <section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.webp" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.webp" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.webp" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.webp" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="assets/images/team/team-shape-one.webp"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/team/team-shape-two.webp"
            alt="Shape"
          />
        </div>
      </section>
      {/* Team Area end */}
      {/* Partners Area start */}
      <PartnerSlider style={{ backgroundColor: "Silver" }} />
      {/* Partners Area end */}
    </Layout>
  );
};
export default About;

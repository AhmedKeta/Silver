import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import ProgressBar from "@/src/components/ProgressBar";
import Meta from "@/components/Meta";

const Team = () => {
  const accordionData = [
    {
      id: 1,
      title: "1.	How do I make a payment?",
      answer:
        "You can make a payment through our secure online payment portal. Simply log in to your account and follow the instructions to complete the payment.",
    },
    { id: 2, title: "How can I get technical support?", answer: "" },
    { id: 3, title: "Simplify Your Color Palette With CSS?" },
    { id: 4, title: "Build A Group Chat App With Vanilla JS?" },
  ];
  return (
    <Layout>
      <Meta
        title="Our Team"
        description="Meet the talented individuals behind Silver Pyramids. Our team members are experts in their respective fields, dedicated to delivering exceptional technology and marketing solutions to our clients."
        keywords="team members, experts, technology solutions, marketing services, professionals, talented individuals"
      />
      <PageBanner
        hero={"/assets/images/hero/our-team.webp"}
        pageName={"Team Member"}
        pageTitle="Such an Amazing Team"
      />
      <section className="team-top-area pt-75 rpt-45 rel z-2">
        <div className="container">
          <div className="row gap-80 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="team-top-video mt-55 wow fadeInRight delay-0-2s">
                <img src="assets/images/team/team-page.webp" alt="Team Page" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="team-top-content mt-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Dedicated Team Member</span>
                  <h2>Our Team is Driven by your Success</h2>
                </div>
                <p>
                  A dedicated team member is a valuable asset for achieving
                  success. With their expertise, commitment, and focus on client
                  satisfaction, they contribute to seamless project execution
                  and outstanding outcomes. Embrace the power of a dedicated
                  team member and unlock your business's full potential.
                </p>
                <div className="team-circle-progress mt-35">
                  <div className="circle-progress-counter">
                    <ProgressBar
                      value={89}
                      color="#674df3"
                      emptyFill={"#e8e4fd"}
                      withoutCounter
                    />
                  </div>
                  <div className="content">
                    <h4>Clients Satisfaction</h4>
                    <p>
                      On the other hand, Client satisfaction is of utmost
                      importance in any business endeavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Top Area end */}
      {/* Team Area start */}
      <section className="team-page-area py-130 rpy-100 rel z-1">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member5.webp" alt="Team" />
                <h4>Federico M. Upton</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member6.webp" alt="Team" />
                <h4>Julio M. McDowell</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member7.webp" alt="Team" />
                <h4>Michael S. Pearson</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member8.webp" alt="Team" />
                <h4>Kenneth L. Booth</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="view-all-btn pt-30 text-center">
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
    </Layout>
  );
};
export default Team;

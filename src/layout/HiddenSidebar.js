import { Fragment } from "react";

const HiddenSidebar = () => {
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="https://www.facebook.com/people/Silver-Pyramids-Inc/100094335560472/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://x.com/silverpyramids1">
              <i className="fab fa-x-twitter" />
            </a>
            <a href="https://www.instagram.com/silverpyramids/">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/silver-pyramids-inc./mycompany/?viewAsMember=true">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.tiktok.com/@silver.pyramids?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1">
              <i className="fab fa-tiktok" />
            </a>
            <a href="https://web.snapchat.com/?ref=snapchat_dot_com_login_cta">
              <i className="fab fa-snapchat" />
            </a>
            <a href="https://www.youtube.com/@SilverPyramids1">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default HiddenSidebar;

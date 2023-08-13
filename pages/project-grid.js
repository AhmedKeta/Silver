import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import Meta from "@/components/Meta";

const ProjectGrid = () => {
  return (
    <Layout>
      <Meta title="Case Studies" />
      <PageBanner pageName={"Case Studies"} />
      <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>
                  Exploring Success: Our Case Studies in Technology and
                  Marketing Solutions
                </h2>
                <p>
                  Dive into our collection of captivating case studies that
                  illuminate the intersection of technology and marketing.
                  Discover how we've partnered with clients to overcome
                  challenges, devise innovative solutions, and achieve
                  remarkable outcomes. Each case study is a testament to our
                  expertise and commitment to delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid1.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid1.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Project name
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid2.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Project name
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid3.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid3.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Project name
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid4.jpg"
                    alt="Project Grid"
                  />
                  <a
                    className="plus"
                    href="assets/images/projects/project-grid4.jpg"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Project name
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/project-details">
                    <a className="detail-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;

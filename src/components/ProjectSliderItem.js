import Link from "next/link";

const ProjectSliderItem = ({ imgSrc, imgAlt, title, content, odd = true }) => {
  return (
    <div className="project-slider-item row">
      {odd && (
        <div className="col-lg-6">
          <div className="video">
            <img src={imgSrc} alt={imgAlt} className="img-fluid" />
          </div>
        </div>
      )}
      <div className="col-lg-6">
        <div className="content">
          <h4>{title}</h4>
          <p>{content}</p>
          {/* <Link legacyBehavior href="/project-details">
            <a className="theme-btn style-two mt-15">
              View Details <i className="fas fa-long-arrow-right" />
            </a>
          </Link> */}
        </div>
      </div>
      {!(odd / 2) && (
        <div className="col-lg-6">
          <div className="video">
            <img src={imgSrc} alt={imgAlt} className="img-fluid" />
          </div>
        </div>
      )}
    </div>
  );
  //   return (
  //     <div className="project-slider-item">
  //       <div className="video col-md-6">
  //         <img src={imgSrc} alt={imgAlt} />
  //       </div>
  //       <div className="content">
  //         <h4>{title}</h4>
  //         <p>{content}</p>
  //         <Link legacyBehavior href="/project-details">
  //           <a className="theme-btn style-two mt-15">
  //             View Details <i className="fas fa-long-arrow-right" />
  //           </a>
  //         </Link>
  //       </div>
  //     </div>
  //   );
};
export default ProjectSliderItem;

import Link from "next/link";

const MarketingService = ({image, title, page}) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="project-grid-item wow fadeInUp delay-0-2s">
        <div className="image">
          <img src={image} alt={title} />
          <Link legacyBehavior href={page}>
            <a className="plus" />
          </Link>
        </div>
        <div className="content" style={{height: "100px"}}>
          <h4>
            <Link legacyBehavior href={page}>
              {title}
            </Link>
          </h4>
          <Link legacyBehavior href={page}>
            <a className="detail-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MarketingService

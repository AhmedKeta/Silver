import Head from "next/head";

const Meta = ({ title, description, image, keywords, href }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Open Graph tags */}
      <meta
        property="og:title"
        content={title ? "Silver Pyramids || " + title : "Silver Pyramids"}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={"https://silverpyramids.com/" + image}
      />
      <meta
        property="og:image:alt"
        content={title ? "Silver Pyramids || " + title : "Silver Pyramids"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={href || "https://silverpyramids.com/"} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? "Silver Pyramids || " + title : "Silver Pyramids"}
      />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={"https://silverpyramids.com/" + image}
      />
      {/* Title */}
      <title>{title ? "Silver Pyramids || " + title : "Silver Pyramids"}</title>
    </Head>
  );
};

export default Meta;

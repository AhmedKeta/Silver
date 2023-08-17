import Head from "next/head";
const url = "https://silverpyramids.com/";

const Meta = ({ title, description, image, keywords, href }) => {
  image = image || "assets/images/hero/hero-one.webp";
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="googlebot" content="index, follow, archive, snippet" />
      {/* Open Graph tags */}
      <meta
        property="og:title"
        content={title ? "Silver Pyramids | " + title : "Silver Pyramids"}
      />
      <meta property="og:site_name" content="Silver Pyramids" />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={url + image} />}
      <meta
        property="og:image:alt"
        content={title ? "Silver Pyramids | " + title : "Silver Pyramids"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={href || url} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? "Silver Pyramids | " + title : "Silver Pyramids"}
      />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="twitter:image" content={url + image} />}
      {/* Title */}
      <title>{title ? "Silver Pyramids | " + title : "Silver Pyramids"}</title>
    </Head>
  );
};

export default Meta;

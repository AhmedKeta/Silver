import Head from "next/head";
const JeenaHead = () => {
  return (
    <Head>
      {/* Favicon Icon */}
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/x-icon"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Flaticon */}
      <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
      <link rel="stylesheet" href="/assets/css/fontawesome-6.4.2.min.css" />
      {/* Bootstrap */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      {/* Magnific Popup */}
      <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
      {/* Nice Select */}
      <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
      {/* Animate */}
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      {/* Slick */}
      <link rel="stylesheet" href="/assets/css/slick.min.css" />
      {/* Main Style */}
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Head>
  );
};
export default JeenaHead;

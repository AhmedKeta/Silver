const Preloader = () => {
  return (
    <div className="preloader">
      {/* <div className="custom-loader" /> */}
      <div id="loader-container">
        <div id="loader-geometric-loader">
          <div id="loader-top-section"></div>
          <div id="loader-bottom-section"></div>
          <div id="loader-left-section"></div>
          <div id="loader-right-section"></div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;

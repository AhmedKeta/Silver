import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { partnerSlider } from "@/src/sliderProps";
import partners from "@/src/partners";

const PartnerSlider = ({style}) => {
  return (
    <section style = {style} className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1 overflow-hidden py-130 rpy-100">
      <div className="container">
        <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
          <h2>Our Customers</h2>
        </div>
        <Slider {...partnerSlider} className="service-three-slider">
          {partners.map((partner) => (
            <div className="col">
              <div>
                <p className="partner-item wow fadeInUp delay-0-3s">
                  <img src={partner.src} alt={partner.alt} />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSlider;

import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    size: 1000,
    swipeToSlide: true,
    autoplaysize: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had an amazing stay at Golden Sands hotel! The staff were incredibly 
        friendly and attentive, and the room was cozy and comfortable and provided 
        all the necessary amenities for a productive stay. 
        The breakfast was delicious and offered a wide variety of options. 
        The location was also great, with easy access to local attractions. 
        I highly recommend Golden Sands to anyone visiting Morocco!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael Jordan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had a wonderful experience staying at Golden Sands hotel. 
        The room was spacious and clean, and the staff went above and beyond 
        to make sure my stay was comfortable. The hotel amenities, such as the spa and pool, 
        were a perfect way to relax after a busy day of exploring. The location was also ideal, 
        with easy access to restaurants and shops. I highly recommend Golden Sands 
        for a luxurious and enjoyable stay in Morocco.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maria carey</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently stayed at Golden Sands hotel for a business trip, and I was thoroughly 
        impressed with the level of service and amenities. The staff were professional and accommodating, 
        and the meeting facilities were top-notch. After a long day of meetings, the spa services 
        were a great way to unwind and relax. The room was also comfortable and provided all the necessary 
        amenities for a productive stay.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had an unforgettable stay at Golden Sands hotel!for a business trip, and I was thoroughly 
        impressed with the level of service and amenities. The staff were professional and accommodating, 
        and the meeting facilities were top-notch. After a long day of meetings, the spa services 
        were a great way to unwind and relax. The room was also comfortable and provided all the necessary 
        amenities for a productive stay.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Karen Gillan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;

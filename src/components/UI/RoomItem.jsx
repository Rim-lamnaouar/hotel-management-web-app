import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/room-item.css";

const RoomItem = (props) => {
  const { imgUrl, tv, roomName, wifi, size, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{roomName}</h4>
          <h6 className="rent__price text-center mt-">
            MAD {price}.00 <span>/ Night</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-tv-line"></i> {tv}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-wifi-line"></i> {wifi}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-crop-line"></i> {size}
            </span>
          </div>

          <button className=" w-100 car__item-btn car__btn-rent">
            <Link to={`/room/${roomName}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default RoomItem;

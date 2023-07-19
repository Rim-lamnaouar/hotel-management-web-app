import React, { useEffect } from "react";

import roomData from "../assets/data/roomData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const RoomDetails = () => {
  const { slug } = useParams();

  const singleRoomItem = roomData.find((item) => item.roomName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleRoomItem]);

  return (
    <Helmet title={singleRoomItem.roomName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleRoomItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleRoomItem.roomName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                  MAD {singleRoomItem.price}.00 / Night
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#08c0ec" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleRoomItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleRoomItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-tv-line"
                      style={{ color: "#08c0ec" }}
                    ></i>{" "}
                    {singleRoomItem.tv}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wifi-line"
                      style={{ color: "#08c0ec" }}
                    ></i>{" "}
                    {singleRoomItem.wifi}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-crop-line"
                      style={{ color: "#08c0ec" }}
                    ></i>{" "}
                    {singleRoomItem.size}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-user-line" style={{ color: "#08c0ec" }}></i>{" "}
                    {singleRoomItem.adulte}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-hotel-bed-line"
                      style={{ color: "#08c0ec" }}
                    ></i>{" "}
                    {singleRoomItem.bedType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#08c0ec" }}
                    ></i>{" "}
                    {singleRoomItem.room}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default RoomDetails;

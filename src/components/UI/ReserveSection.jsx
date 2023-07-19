import React from "react";
import "../../styles/reserve-section.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import makeRoomImg from "../../assets/all-images/make-room.jpg";

const ReserveSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={makeRoomImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
            GOLDEN SANDS Hotel & Resort RELAX YOUR MIND
            </h2>

            <button className="btn reserve__btn mt-4">
              <Link to="/room">Reserve Now</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReserveSection;

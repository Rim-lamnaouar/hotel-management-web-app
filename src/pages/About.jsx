import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import ReserveSection from "../components/UI/ReserveSection";

import viewImg from "../assets/all-images/img-0.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={viewImg} alt="" className="w-100 rounded-4"/>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Pearl Of The Morocco.
                </h2>

                <p className="section__description">
                The Golden Sands hotel is a magnificent beachfront property
                 located in a prime location. With its stunning views of the ocean and pristine
                  sandy beaches, it offers guests a truly memorable experience. 
                  The hotel's contemporary design and elegant decor create a stylish and luxurious ambiance 
                  that is perfect for both leisure and business travelers.
                </p>

                <p className="section__description">
                The Golden Sands hotel features a range of spacious and well-appointed 
                rooms and suites, designed with comfort and convenience in mind. Each room offers 
                modern amenities such as air conditioning, flat-screen TVs, minibars, and private 
                balconies with breathtaking views. The attentive staff ensures that guests 
                have everything they need for a comfortable and enjoyable stay.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Call us now!</h6>
                    <h4>+212 0645406510</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ReserveSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;

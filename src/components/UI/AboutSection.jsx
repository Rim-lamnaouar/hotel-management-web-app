import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/rooms-img/about-us.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Most Safe & Rated Hotel In Morocco</h2>
              <p className="section__description">
              Welcome to Golden Sands, a luxurious hotel located in the heart of Morocco. 
              Our hotel is dedicated to providing our guests with the highest quality service, comfort,
              and hospitality during their stay with us. Whether you're here for business or pleasure,
              our staff is committed to ensuring that your experience at Golden Sands is both relaxing and memorable.
              Our hotel offers a variety of spacious and elegantly designed rooms and suites, each equipped with modern
              amenities to meet your every need. <br></br>
              From our on-site restaurants and bars to our fitness center and spa, we strive 
              to provide our guests with a comprehensive range of facilities that cater to their needs and preferences.
              At Golden Sands, we pride ourselves on our commitment to sustainability and social responsibility. <br></br>
              We work to minimize our environmental impact and support local communities through responsible sourcing and ethical 
              business practices.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Spacious, elegantly designed rooms and suites
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> On-site restaurants
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Free parking and shuttle services
                </p>

                {/*<p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Spa providing a range of relaxing treatments and therapies.
                </p>*/}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100 rounded-4"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

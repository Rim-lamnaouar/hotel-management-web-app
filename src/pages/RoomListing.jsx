import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import RoomItem from "../components/UI/RoomItem";
import roomData from "../assets/data/roomData";


const RoomListing = () => {
  const [sortOrder, setSortOrder] = useState("low");

  // Sort the roomData array based on price
  const sortedRoomData = roomData.sort((a, b) =>
    sortOrder === "low" ? a.price - b.price : b.price - a.price
  );

  return (
    <Helmet title="Cars">
      <CommonSection title="Our Rooms" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={(e) => setSortOrder(e.target.value)}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {/* Map the sortedRoomData array */}
            {sortedRoomData.map((item) => (
              <RoomItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default RoomListing;

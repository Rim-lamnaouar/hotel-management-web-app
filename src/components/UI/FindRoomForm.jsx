import React from "react";
import "../../styles/find-room-form.css";
import "../../styles/find-room-form.css";
import { Form, FormGroup } from "reactstrap";

const FindRoomForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
           <span>Check In Date</span>
          <input type="date" placeholder="Check In Date" required />
        </FormGroup>

        <FormGroup className="form__group">
        <span>Check Out Date</span>
          <input type="date" placeholder="Check Out Date" required />
        </FormGroup>

        <FormGroup className="select__group">
          Adults
          <select>
            <option value="ac">Adults</option>
            <option value="non-ac">1</option>
            <option value="non-ac">2</option>
            <option value="non-ac">3</option>
            <option value="non-ac">4</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Child</option>
            <option value="non-ac">1</option>
            <option value="non-ac">2</option>
            <option value="non-ac">3</option>
            <option value="non-ac">4</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Room</option>
            <option value="non-ac">1</option>
            <option value="non-ac">2</option>
            <option value="non-ac">3</option>
            <option value="non-ac">4</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Check availability</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindRoomForm;

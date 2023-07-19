import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" required/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Phone Number" required/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="City" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <select name="" id="" onChange={(e) => setadults(e.target.value)}>
          <option value="1 "selected hidden> Adults </option>
          <option value="1 ">1 </option>
          <option value="2 ">2 </option>
          <option value="3 ">3 </option>
          <option value="4 ">4 </option>
          <option value="5+ ">+5 </option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
      <select name="" id="" onChange={(e) => setchildren(e.target.value)}>
          <option value="0" selected hidden> Child </option>
          <option value="0">0 </option>
          <option value="1 ">1 </option>
          <option value="2 ">2 </option>
          <option value="3 ">3 </option>
          <option value="4 ">4 </option>
          <option value="5+">+5 </option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <span>Check In Date</span>
        <input type="date" placeholder="Journey Date" required/>
      </FormGroup>
      
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <span>Check Out Date</span>
        <input type="date" placeholder="Journey Date" required/>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      {/*<button type="submit">Submit</button>*/}
    </Form>
  );
};

export default BookingForm;

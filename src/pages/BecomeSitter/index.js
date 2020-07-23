import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import Upload from "../../components/Upload";

export default function BecomeSitter() {
 
  return (
    <div>
      <h1>BecomeSitter</h1>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Let's get started :)</h1>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>House number</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>street</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>postcode</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        {
          //<Upload></Upload>
        }

        <h3 className="mt-5 mb-3">Add your phone number</h3>
        <p>
          We requires a verified phone number for important updates. <br></br>
          Note:
          your phone number won't be displayed on your profile.
        </p>

        <Form.Group as={Col} controlId="formGridZip" type="number">
            <Form.Label>Phone Number </Form.Label>
            <Form.Control />
          </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

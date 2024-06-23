import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { createUser } from "../axios/userAxios";
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const UserForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createUser(formData);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>User Registration</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;

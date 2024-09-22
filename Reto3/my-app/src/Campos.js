import React, { useState } from 'react';
import './Campos.css';
import { Form, Button } from 'react-bootstrap';

const Campos = () => {
  const [formData, setFormData] = useState({ username: 'test', fullname: 'name', age: 34 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>FullName:</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <div className="request-summary">
          <h3>Request Sent to DB with below request data</h3>
          <ul>
            <li>UserName: {formData.username.toUpperCase()}</li>
            <li>FullName: {formData.fullname.toUpperCase()}</li>
            <li>Age: {formData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Campos;

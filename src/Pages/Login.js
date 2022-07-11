import React, { useState } from "react";
import API from "../API/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Assets/Styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    API.post("/login", { email: email, password: password })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="Login">
        <h1>Sign-In</h1>
        <Form.Group size="md" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="md" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="Login__button"
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

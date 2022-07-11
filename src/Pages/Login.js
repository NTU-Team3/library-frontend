import React, { useState } from "react";
import API from "../API/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Assets/Styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonSelected, setButtonSelected] = useState("signIn");

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
    <div className="login__container">
      <div>
        <div className="login__tabs">
          <button
            className={buttonSelected === "signIn" && "button_selected"}
            onClick={() => {
              setButtonSelected("signIn");
            }}
          >
            Sign-In
          </button>
          <button
            className={buttonSelected === "register" && "button_selected"}
            onClick={() => {
              setButtonSelected("register");
            }}
          >
            Register
          </button>
        </div>
        {buttonSelected === "signIn" ? (
          <Form onSubmit={handleSubmit} className="Login">
            <h2>Sign-In</h2>
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
        ) : (
          <Form onSubmit={handleSubmit} className="Login">
            <h2>Register</h2>
            <Form.Group size="md" controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={"name"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
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
            <Form.Group size="md" controlId="password">
              <Form.Label>Confirm password</Form.Label>
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
        )}
      </div>
    </div>
  );
}

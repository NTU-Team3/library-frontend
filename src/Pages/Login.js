import React, { useState } from "react";
import API from "../API/APIUtils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Assets/Styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonSelected, setButtonSelected] = useState("signIn");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCfmPassword, setRegisterCFMPassword] = useState("");
  const [errors, setError] = useState([]);

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

  function registerSubmit(event) {
    API.post("/register", {
      registerName: registerName,
      registerEmail: registerEmail,
      registerPassword: registerPassword,
    });
  }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function validateRegisterForm() {
    const errors = [];
    if (registerName.trim().length === 0) {
      errors.push("Name must not be empty");
    }
    if (
      !registerEmail.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      errors.push("Invalid email");
    }
    if (registerPassword.trim().length < 4) {
      errors.push("Password must be at least 4 characters long");
    }
    if (registerPassword !== registerCfmPassword) {
      errors.push("Password and confirm password dont match");
    }
    return errors;
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const checkErrors = validateRegisterForm();
    if (checkErrors.length > 0) {
      setError(checkErrors);
    } else {
      registerSubmit();
    }
  };

  return (
    <div className="login__container">
      <div>
        <div className="login__tabs">
          <button
            className={
              buttonSelected === "signIn" ? "button_selected" : undefined
            }
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
                required
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
          /* ------------------------Register form -------------------------------------*/

          <Form onSubmit={handleRegisterSubmit} className="Login">
            <h2>Register</h2>
            <Form.Group size="md" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="md" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="md" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="md" controlId="confirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                value={registerCfmPassword}
                onChange={(e) => setRegisterCFMPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="Login__button"
              block="true"
              size="lg"
              type="submit"
              onSubmit={validateRegisterForm()}
            >
              Register
            </Button>
            <div className="login__error">
              {errors.length !== 0 ? (
                <ul className="error_list">
                  {errors.map((e) => {
                    return <li>{e} </li>;
                  })}
                </ul>
              ) : undefined}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

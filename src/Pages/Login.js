import React, { useState } from "react";
import API from "../API/APIUtils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

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

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

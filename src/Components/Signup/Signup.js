// import "./Signup.css";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
// import { useAuth } from "../Contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

const Signup = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
//   const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignup(e) {
    // alert("Hello");
    axios
      .post("https://agile-server.onrender.com/registration", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // alert("Signup successful");

    // e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    // try {
    //   setError("");
    //   setLoading(true);
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   history.push("/");
    // } catch {
    //   setError("Failed to create an account");
    // }

    setLoading(false);
  }

  return (
    <div className="signup">
      <Form className="signup-form">
        <h2>عalegny Shokran</h2>
        <h3>Sign Up</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter first name"
            ref={firstNameRef}
            required
          />
          <Form.Control
            type="text"
            placeholder="Enter last name"
            ref={lastNameRef}
            required
          />
          {/* <Form.Select>
            <option>Doctor</option>
            <option>Patient</option>
          </Form.Select> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
          <Form.Control
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
          <Form.Control
            type="password"
            placeholder="Enter password again"
            ref={passwordConfirmRef}
            required
          />
          <Button disabled={loading} variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Form.Group>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
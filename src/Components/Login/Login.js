import "./Login.css";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import background from "../../Assets/background.png"

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     const response = await axios.post("https://agile-server.onrender.com/getUser", {
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value
  //     });
  //     // login(response.data.token, response.data.user);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }

  //   setLoading(false);
  // }

  // const submitLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     const response = await axios.post("https://agile-server.onrender.com/getUser", {
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value
  //     });
  //     handleLogin(response.data.success);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }
  //   setLoading(false);
  // }

  const handleLogin = () => {
    axios
      .post("https://agile-server.onrender.com/getUser", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == "Successfully logged in.") {
          navigate("/home");
        } else {
          setError("Incorrect email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleLogin(emailRef.current.value, passwordRef.current.value);
  // };

  // function handleLogin(e) {
  //   e.preventDefault();

  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;

  //   axios.post("https://agile-server.onrender.com/getUser", { email, password })
  //     .then(response => {
  //       // handle successful login
  //       console.log(response);
  //       history.push('/');
  //     })
  //     .catch(error => {
  //       // handle login error
  //       console.log(error);
  //     });
  // }

  return (
    <div className="login" style={{color:"white", fontWeight:"bolder"}}>
      <Form className="login-form">
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{color:"white"}}>
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
          <Button disabled={loading} variant="primary" onClick={handleLogin}>
            Login
          </Button>
          <div className="w-100 text-center mt-2" style={{color:"white", fontWeight:"bold"}}>
            Need an account? <Link to="/signup" className="link_signup">Sign Up</Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
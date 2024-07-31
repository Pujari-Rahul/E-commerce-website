import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// navigate('/home'); 
import './login.css'
import SuccessPage from "./SuccessPage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log('in login page')
  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", email, password);
    // Example: Perform authentication with an API, then redirect to the dashboard
    navigate("/SuccessPage");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/createaccount">Create one</a></p>
    </div>
  );
};
export default Login;
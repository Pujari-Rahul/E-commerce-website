import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Implement your account creation logic here
    console.log("Creating account with:", email, password);
    // Example: Send account creation request to an API, then redirect to the login page
    navigate("/login");
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
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
      <button onClick={handleCreateAccount}>Create Account</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default CreateAccount;
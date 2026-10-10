import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { loginUser } from "../services/authService";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email: email.trim().toLowerCase(),
        password,
      });

      console.log("LOGIN RESPONSE:", data);

      localStorage.setItem("token", data.token);

      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      console.error("Backend response:", error.response?.data);

      alert(error.response?.data?.message || error.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter correct password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have account?
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

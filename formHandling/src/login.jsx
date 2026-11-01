import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "nimish" && password === "12345") {
      const user = {
        name: "Nimish Chauhan",
        username: "nimish",
        email: "nimish@example.com",
        role: "Student",
      };

      localStorage.setItem("user", JSON.stringify(user));

      // Reload main application
      window.location.href = "/";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">⚡</div>

        <span className="login-badge">PROGRAMMING HUB</span>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to access your programming dashboard.
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="login-field">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          {error && <div className="login-error">⚠ {error}</div>}

          <button type="submit" className="login-button">
            Login
            <span>→</span>
          </button>
        </form>

        <div className="demo-login">
          <span>Demo Login</span>

          <p>
            Username: <b>nimish</b>
          </p>

          <p>
            Password: <b>12345</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

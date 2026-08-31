import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("access_token", "demo_token");

    router("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🏠 PGFinder</div>

        <h1>Create account</h1>

        <p>Join PGFinder and discover your next home.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            type="text"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            placeholder="Create a password"
          />

          <label>Confirm Password</label>

          <input
            type="password"
            required
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            placeholder="Confirm password"
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => router("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;

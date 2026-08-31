import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${email}`,
      );

      const users = await response.json();

      const user = users.find((u) => u.password === password);

      if (!user) {
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }

      // Fake token for frontend project
      localStorage.setItem("access_token", "pgfinder_token");
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home", { replace: true });
    } catch (error) {
      setError("Unable to connect to server");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <span className="logo-icon">🏠</span>
            PG Finder
          </div>

          <h2>Find a place that feels like home.</h2>
          <p>
            Browse verified PGs and rooms near you, compare facilities, and book
            with confidence.
          </p>

          <ul className="auth-brand-points">
            <li>✓ Verified listings across the city</li>
            <li>✓ Transparent pricing, no surprises</li>
            <li>✓ Save favorites and compare easily</li>
          </ul>
        </div>

        <div className="auth-form-panel">
          <div className="auth-form-inner">
            <h1>Welcome back</h1>
            <p>Log in to continue to your account</p>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

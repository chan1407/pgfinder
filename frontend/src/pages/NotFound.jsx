import { useNavigate } from "react-router-dom";

function NotFound() {
  const router = useNavigate();

  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>Sorry, the page you're looking for doesn't exist.</p>

      <button onClick={() => router("/")}>Go Home</button>
    </div>
  );
}

export default NotFound;

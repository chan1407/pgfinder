import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [clickedbtn, setClickedbtn] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/home")}>
          <span className="logo-icon">🏠</span>
          PG Finder
        </div>

        <div className="nav-links">
          <button
            className={clickedbtn == "home" ? "btn btn-primary" : ""}
            onClick={() => {
              (navigate("/home"), setClickedbtn("home"));
            }}
          >
            Home
          </button>

          <button
            className={clickedbtn == "findpg" ? "btn btn-primary" : ""}
            onClick={() => {
              (navigate("/find-pg"), setClickedbtn("findpg"));
            }}
          >
            Find PG
          </button>

          <button
            className={clickedbtn == "fav" ? "btn btn-primary" : ""}
            onClick={() => {
              (navigate("/favorites"), setClickedbtn("fav"));
            }}
          >
            Favorites
          </button>

          <button
            className={clickedbtn == "abount" ? "btn btn-primary" : ""}
            onClick={() => {
              (navigate("/about"), setClickedbtn("about"));
            }}
          >
            About
          </button>

          <button
            className={clickedbtn == "profile" ? "btn btn-primary" : ""}
            onClick={() => {
              (navigate("/profile"), setClickedbtn("profile"));
            }}
          >
            Profile
          </button>

          <button className="logout-nav-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import PGCard from "../components/PGCard";
import { getPGs } from "../services/api";

function Home() {
  const router = useNavigate();

  const [pgs, setPgs] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadPGs();

    const saved = JSON.parse(localStorage.getItem("favourites")) || [];

    setFavourites(saved);
  }, []);

  const loadPGs = async () => {
    try {
      const data = await getPGs();
      setPgs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavourite = (id) => {
    let updated;

    if (favourites.includes(id)) {
      updated = favourites.filter((item) => item !== id);
    } else {
      updated = [...favourites, id];
    }

    setFavourites(updated);

    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  const handleSearch = (value) => {
    router(`/pgs?search=${encodeURIComponent(value)}`);
  };

  return (
    <div className="home-page">
      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🏠 FIND YOUR PERFECT STAY</span>

          <h1>
            Find a PG that
            <span> feels like home.</span>
          </h1>

          <p>
            Discover verified PGs and rooms near your college, workplace or
            favourite location.
          </p>

          <SearchBar onSearch={handleSearch} />

          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>PGs Listed</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Locations</span>
            </div>

            <div>
              <strong>4.5★</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="hero-card">
            <span>⭐</span>
            <div>
              <strong>Top Rated</strong>
              <small>4.8 / 5 rating</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Popular Locations</h2>
          </div>

          <button onClick={() => router("/pgs")} className="view-all-btn">
            View all →
          </button>
        </div>

        <div className="locations-grid">
          {[
            ["Velachery", "120+ PGs", "📍"],
            ["Guindy", "85+ PGs", "🏢"],
            ["OMR", "150+ PGs", "💼"],
            ["T Nagar", "70+ PGs", "🛍"],
            ["Porur", "60+ PGs", "🏙"],
          ].map(([name, count, icon]) => (
            <button
              className="location-card"
              key={name}
              onClick={() =>
                router(`/pgs?location=${encodeURIComponent(name)}`)
              }
            >
              <span className="location-icon">{icon}</span>

              <div>
                <strong>{name}</strong>
                <small>{count}</small>
              </div>

              <span>→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="section-heading">
          <div>
            <span>HANDPICKED FOR YOU</span>
            <h2>Featured PGs</h2>
          </div>

          <button onClick={() => router("/pgs")} className="view-all-btn">
            Explore all →
          </button>
        </div>

        <div className="pg-grid">
          {pgs.slice(0, 3).map((pg) => (
            <PGCard
              key={pg.id}
              pg={pg}
              isFavourite={favourites.includes(pg.id)}
              onFavourite={handleFavourite}
            />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span>LOOKING FOR A PLACE?</span>

          <h2>
            Your next home is
            <br />
            just one search away.
          </h2>

          <button onClick={() => router("/find-pg")}>Explore PGs →</button>
        </div>

        <div className="cta-icon">🏠</div>
      </section>
    </div>
  );
}

export default Home;

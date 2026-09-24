import { Navigate, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="section-tag">ABOUT PG FINDER</p>

          <h1>
            Find a Place
            <span> You Can Call Home</span>
          </h1>

          <p>
            PG Finder helps students and working professionals discover
            comfortable, affordable and convenient PGs and rooms in their
            preferred location.
          </p>

          <button
            className="about-btn"
            onClick={() => {
              navigate("/find-pg");
            }}
          >
            Explore PGs
          </button>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=80"
            alt="Comfortable room"
          />
        </div>
      </section>

      {/* Why PG Finder */}
      <section className="why-section">
        <div className="section-heading">
          <p className="section-tag">WHY PG FINDER?</p>

          <h2>
            Everything You Need to Find
            <br />
            Your Perfect Stay
          </h2>

          <p>
            Finding the right place to stay shouldn't be complicated. PG Finder
            makes the process simple, fast and convenient.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>

            <h3>Easy Search</h3>

            <p>
              Search PGs based on location, budget, gender preference and room
              type.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>

            <h3>Affordable Options</h3>

            <p>
              Discover PGs and rooms that match your budget without compromising
              on comfort.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>

            <h3>Great Locations</h3>

            <p>
              Find accommodations close to colleges, offices, transport and
              essential facilities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>

            <h3>Save Favorites</h3>

            <p>Save PGs you like and easily compare them whenever you need.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="section-heading">
          <p className="section-tag">HOW IT WORKS</p>

          <h2>Find Your PG in 3 Simple Steps</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>

            <h3>Search</h3>

            <p>Enter your preferred location and explore available PGs.</p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>

            <h3>Compare</h3>

            <p>Compare rent, location, room type, facilities and ratings.</p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>

            <h3>Choose</h3>

            <p>Select the PG that best matches your needs and preferences.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>500+</h2>
          <p>PG Listings</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Locations</p>
        </div>

        <div className="stat-card">
          <h2>1K+</h2>
          <p>Happy Users</p>
        </div>

        <div className="stat-card">
          <h2>4.5★</h2>
          <p>Average Rating</p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Find Your Perfect PG?</h2>

        <p>Start exploring comfortable and affordable accommodations today.</p>

        <button className="about-btn" onClick={() => navigate("/find-pg")}>
          Find a PG
        </button>
      </section>
    </div>
  );
}

export default About;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPGById } from "../services/api";

function PGDetails() {
  const { id } = useParams();
  const router = useNavigate();

  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    loadPG();
    checkFavourite();
  }, [id]);

  const loadPG = async () => {
    try {
      const data = await getPGById(id);
      setPg(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const checkFavourite = () => {
    const saved = JSON.parse(localStorage.getItem("favourites")) || [];

    setFavourite(saved.includes(Number(id)));
  };

  const toggleFavourite = () => {
    let saved = JSON.parse(localStorage.getItem("favourites")) || [];

    if (saved.includes(Number(id))) {
      saved = saved.filter((item) => item !== Number(id));
      setFavourite(false);
    } else {
      saved.push(Number(id));
      setFavourite(true);
    }

    localStorage.setItem("favourites", JSON.stringify(saved));
  };

  if (loading) {
    return <div className="loading">Loading PG details...</div>;
  }

  if (!pg) {
    return (
      <div className="empty-state">
        <h2>PG not found</h2>
      </div>
    );
  }

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => router(-1)}>
        ← Back
      </button>

      <div className="details-image">
        <img src={pg.image} alt={pg.name} />

        <span className="details-gender">{pg.gender}</span>
      </div>

      <div className="details-content">
        <div className="details-title-row">
          <div>
            <div className="rating">⭐ {pg.rating}</div>

            <h1>{pg.name}</h1>

            <p className="details-location">
              📍 {pg.location}, {pg.city}
            </p>
          </div>

          <button
            className={`large-favorite ${favourite ? "favorite-active" : ""}`}
            onClick={toggleFavourite}
          >
            {favourite ? "♥" : "♡"}
          </button>
        </div>

        <div className="details-price">
          <strong>₹{pg.rent.toLocaleString()}</strong>

          <span>/ month</span>
        </div>

        <p className="details-description">{pg.description}</p>

        <div className="details-section">
          <h2>Room Information</h2>

          <div className="details-info-grid">
            <div>
              <span>Room Type</span>
              <strong>🛏 {pg.roomType}</strong>
            </div>

            <div>
              <span>Available Rooms</span>
              <strong>🚪 {pg.availableRooms}</strong>
            </div>

            <div>
              <span>Suitable For</span>
              <strong>👤 {pg.gender}</strong>
            </div>

            <div>
              <span>Rating</span>
              <strong>⭐ {pg.rating}/5</strong>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Facilities & Amenities</h2>

          <div className="facility-list">
            {pg.facilities.map((facility) => (
              <span key={facility}>✓ {facility}</span>
            ))}
          </div>
        </div>

        <button className="contact-btn">Contact PG Owner</button>
      </div>
    </div>
  );
}

export default PGDetails;

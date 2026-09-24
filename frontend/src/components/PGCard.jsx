import { useNavigate } from "react-router-dom";

function PGCard({ pg, isFavourite, onFavourite }) {
  const router = useNavigate();

  const handleDetails = () => {
    router(`/pg/${pg.id}`);
  };

  return (
    <div className="pg-card">
      <div className="pg-image">
        <img src={pg.image} alt={pg.name} />

        <button
          className={`favorite-btn ${isFavourite ? "favorite-active" : ""}`}
          onClick={() => onFavourite(pg.id)}
        >
          {isFavourite ? "♥" : "♡"}
        </button>

        <span className="gender-badge">{pg.gender}</span>
      </div>

      <div className="pg-card-content">
        <div className="rating">⭐ {pg.rating}</div>

        <h3>{pg.name}</h3>

        <p className="location">
          📍 {pg.location}, {pg.city}
        </p>

        <div className="pg-info">
          <span>🛏 {pg.roomType}</span>
          <span>🚪 {pg.availableRooms} Rooms</span>
        </div>

        <div className="facilities">
          {pg.facilities.slice(0, 3).map((facility) => (
            <span key={facility}>{facility}</span>
          ))}
        </div>

        <div className="card-bottom">
          <div>
            <strong>₹{pg.rent.toLocaleString()}</strong>
            <small>/ month</small>
          </div>

          <button className="details-btn" onClick={handleDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PGCard;

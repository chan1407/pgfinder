import { useEffect, useState } from "react";

import PGCard from "../components/PGCard";
import EmptyState from "../components/EmptyState";
import { getPGs } from "../services/api";

function Favourites() {
  const [pgs, setPgs] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getPGs();

      const saved = JSON.parse(localStorage.getItem("favourites")) || [];

      setPgs(data);
      setFavourites(saved);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavourite = (id) => {
    const updated = favourites.filter((item) => item !== id);

    setFavourites(updated);

    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  const favouritePGs = pgs.filter((pg) => favourites.includes(pg.id));

  return (
    <div className="favourites-page">
      <div className="page-title">
        <span>YOUR SAVED PLACES</span>

        <h1>Favourite PGs</h1>

        <p>Your saved PGs are all here.</p>
      </div>

      {favouritePGs.length === 0 ? (
        <EmptyState
          title="No favourites yet"
          message="Save PGs you like and they will appear here."
        />
      ) : (
        <div className="pg-grid">
          {favouritePGs.map((pg) => (
            <PGCard
              key={pg.id}
              pg={pg}
              isFavourite={true}
              onFavourite={handleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;

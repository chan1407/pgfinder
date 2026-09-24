import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PGCard from "../components/PGCard";
import FilterSidebar from "../components/FilterSidebar";
import EmptyState from "../components/EmptyState";
import { getPGs } from "../services/api";

function PGList() {
  const [searchParams] = useSearchParams();

  const [pgs, setPgs] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    roomType: "",
    gender: "",
    maxRent: "",
  });

  const [search, setSearch] = useState(searchParams.get("search") || "");

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

  const filteredPGs = pgs.filter((pg) => {
    const searchMatch =
      !search ||
      pg.name.toLowerCase().includes(search.toLowerCase()) ||
      pg.location.toLowerCase().includes(search.toLowerCase()) ||
      pg.city.toLowerCase().includes(search.toLowerCase());

    const locationMatch = !filters.location || pg.location === filters.location;

    const roomMatch = !filters.roomType || pg.roomType === filters.roomType;

    const genderMatch = !filters.gender || pg.gender === filters.gender;

    const rentMatch = !filters.maxRent || pg.rent <= Number(filters.maxRent);

    return (
      searchMatch && locationMatch && roomMatch && genderMatch && rentMatch
    );
  });

  return (
    <div className="listing-page">
      <div className="listing-header">
        <div>
          <span>PG DIRECTORY</span>
          <h1>Find Your Perfect PG</h1>

          <p>Browse verified PGs and rooms that match your needs.</p>
        </div>
      </div>

      <div className="listing-layout">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <section className="listing-results">
          <div className="results-toolbar">
            <div>
              <strong>{filteredPGs.length}</strong> PGs found
            </div>

            <div className="listing-search">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </div>
          </div>

          {filteredPGs.length === 0 ? (
            <EmptyState
              title="No PGs found"
              message="Try changing your search or filters."
            />
          ) : (
            <div className="pg-grid">
              {filteredPGs.map((pg) => (
                <PGCard
                  key={pg.id}
                  pg={pg}
                  isFavourite={favourites.includes(pg.id)}
                  onFavourite={handleFavourite}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default PGList;

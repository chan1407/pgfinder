function FilterSidebar({ filters, setFilters }) {
  const updateFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      roomType: "",
      gender: "",
      maxRent: "",
    });
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>

        <button onClick={clearFilters}>Clear All</button>
      </div>

      <div className="filter-group">
        <h4>Location</h4>

        <select
          value={filters.location}
          onChange={(e) => updateFilter("location", e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Velachery">Velachery</option>
          <option value="Guindy">Guindy</option>
          <option value="OMR">OMR</option>
          <option value="T Nagar">T Nagar</option>
          <option value="Porur">Porur</option>
          <option value="Tambaram">Tambaram</option>
        </select>
      </div>

      <div className="filter-group">
        <h4>Room Type</h4>

        {["Single", "Double", "Triple"].map((type) => (
          <label key={type} className="radio-label">
            <input
              type="radio"
              name="roomType"
              checked={filters.roomType === type}
              onChange={() => updateFilter("roomType", type)}
            />
            {type} Room
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>For</h4>

        {["Male", "Female", "Unisex"].map((gender) => (
          <label key={gender} className="radio-label">
            <input
              type="radio"
              name="gender"
              checked={filters.gender === gender}
              onChange={() => updateFilter("gender", gender)}
            />

            {gender}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Maximum Rent</h4>

        <select
          value={filters.maxRent}
          onChange={(e) => updateFilter("maxRent", e.target.value)}
        >
          <option value="">Any Price</option>
          <option value="5000">₹5,000</option>
          <option value="7000">₹7,000</option>
          <option value="9000">₹9,000</option>
          <option value="12000">₹12,000</option>
          <option value="15000">₹15,000</option>
        </select>
      </div>
    </aside>
  );
}

export default FilterSidebar;

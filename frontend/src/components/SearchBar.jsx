import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-icon">⌕</span>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search PG, location or city..."
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = ({ onFilterBooks }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query)
    onFilterBooks(query);
  }
  return (
      <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
  )
};
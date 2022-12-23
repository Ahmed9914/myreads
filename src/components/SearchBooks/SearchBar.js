import { useState } from "react";

export const SearchBar = ({ onFilterBooks, onSetShowSearchpage }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query)
    onFilterBooks(query);
  }
  return (
      <div className="search-books-bar">
          <a
            href="#"
            className="close-search"
            onClick={onSetShowSearchpage}
          >
            Close
          </a>
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
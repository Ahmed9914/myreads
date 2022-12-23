export const SearchBar = ({ onSetShowSearchpage }) => {
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
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
    )
};
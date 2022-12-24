import { Shelf } from "./ListShelves/Shelf";
import { Link } from "react-router-dom";

export const ListShelves = ({ shelves, onChangeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
          {
            Object.keys(shelves).map((shelfTitle, key) => (
              < Shelf
                  key={key}
                  shelfTitle={shelfTitle}
                  shelfBooks={shelves[shelfTitle]}
                  onChangeShelf={onChangeShelf}
                />
            ))
          }
      </div>
      <div className="open-search">
        <Link to="/search"  >
          Add a book
        </Link>
      </div>
      
    </div>

  )
    
    
}
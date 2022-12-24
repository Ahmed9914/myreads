import { Shelf } from "./ListShelves/Shelf";

export const ListShelves = ({ shelves, onChangeShelf, onSetShowSearchpage }) => {
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
        <a onClick={onSetShowSearchpage}>Add a book</a>
      </div>
    </div>

  )
    
    
}
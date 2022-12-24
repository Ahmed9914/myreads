import { BooksGrid } from "../BooksGrid";

export const Shelf = ({ shelfTitle, shelfBooks, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                < BooksGrid
                    books={shelfBooks}
                    onChangeShelf={onChangeShelf}
                />
            </div>
        </div>
        
    )
};
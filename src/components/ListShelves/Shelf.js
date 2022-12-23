import { BooksGrid } from "../BooksGrid";

export const Shelf = ({ shelfTitle, shelfBooks}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                < BooksGrid  books={shelfBooks} />
            </div>
        </div>
        
    )
};
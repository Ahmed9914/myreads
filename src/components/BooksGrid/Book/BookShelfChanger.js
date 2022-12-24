import { useState } from "react";

export const BookShelfChanger = ({ book, onChangeShelf }) => {
    const [choice, setChoice] = useState(book.shelf);

    const handleChange = (choice) => {
        setChoice(choice);
        if (onChangeShelf) {
            onChangeShelf(book, choice);
        }
        
    }
    return (
        <div className="book-shelf-changer">
                <select
                    value={choice}
                    onChange={(event) => handleChange(event.target.value)}
                    >
                    <option value="none" disabled>
                    Move to...
                    </option>
                    {
                        [
                            {"currentlyReading": "Currently Reading"},
                            {"wantToRead": "Want to Read"},
                            {"read": "Read"}
                        ].map((value, key) => (
                            <option key={key} value={Object.keys(value)}> {Object.values(value)} </option>
                        ))
                    }
                </select>
        </div>
    )
}
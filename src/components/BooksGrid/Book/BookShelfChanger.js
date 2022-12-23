export const BookShelfChanger = ({ currentShelf }) => {
    return (
        // TODO: Fix choice to match currentShelf
        <div className="book-shelf-changer">
            <select>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="currentlyReading">
                Currently Reading
                </option>
                <option value="wantToRead">Want to Read </option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Bookshelves from './bookshelves'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }


    render() {
        const {book, onChangeShelf} = this.props


        return (
            <div className="book">
                <div className="book-top">
                    {book.imageLinks &&
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}
                    />
                    }
                    <div className="book-shelf-changer">
                        <select value={book.shelf}
                                onChange={(event) => (onChangeShelf(book, event.target.value))}>
                            <option value="move" disabled>Move to...</option>
                            {Bookshelves.bookshelves.map((shelf) => (
                                <option value={shelf.key} key={shelf.key}>{shelf.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(" ") : " "}</div>
            </div>
        )
    }

}

export default Book
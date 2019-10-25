import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from "./Book";
import Bookshelves from './bookshelves'
import {Link} from 'react-router-dom'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Bookshelves.bookshelves.map((bookshelf) => (
                            <div className="bookshelf"
                                 key={bookshelf.key}>
                                <h2 className="bookshelf-title">{bookshelf.name}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.books.filter((book)=>(book.shelf === bookshelf.key)).map((book) => (
                                            <Book book={book}
                                                  key={book.id}
                                                  onChangeShelf={this.props.onChangeShelf}
                                            />
                                        ))}

                                    </ol>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button onClick={() => {}}>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
import React from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class SearchPage extends React.Component {

    state = {
        query: '',
        search_results: [],
    };
    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).catch(console.warn)
    };

    handleQuery = (event) => {
        this.setState({query: event.target.value});
        this.searchBook(event.target.value);
    };

    searchBook = (query) => {
        query = "" + query;
        if (query.length > 0) {
            BooksAPI.search(query).then((books)=>{
                // console.log(books)
                if (!books.error) {
                    this.setState({search_results: books})
                } else {
                    console.warn(books.error);
                }
            })
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleQuery} value={this.state.query}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.search_results.map((book, idx)=> {
                            return <Book book={book} key={idx} onChangeShelf={this.changeShelf}/>
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;
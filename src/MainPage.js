import React from 'react';
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";


class MainPage extends React.Component {
    state = {
        books: [],
    }
    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            this.forceUpdate()
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }


    render() {
        return (<div className="app">
                <ListBooks books={this.state.books} onChangeShelf={this.changeShelf}/>
            </div>

        )
    }
}
export default MainPage;
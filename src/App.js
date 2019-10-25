import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

class BooksApp extends React.Component {




    render() {
        return (
            <div>
                <Route path="/search" exact render={() => (
                    <SearchPage/>
                )}/>
                <Route path="/" exact render={() => (
                    <MainPage/>
                )}/>
            </div>
        )
    }
}

export default BooksApp

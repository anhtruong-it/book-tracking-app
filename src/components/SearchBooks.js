/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

const SearchBooks = ({onSearchBook}) => {
    const [query, setQuery] = useState("");
    const [showSearchPage, setShowSearchpage] = useState(false);

    const showingBooks = 
    query === ""
        ? onSearchBook
        : onSearchBook.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
        );
        
    return (
        <div className="search-books">
              <div className="search-books-bar">
               <Link className="close-search" to="/">
                Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                  />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
    );
};

export default SearchBooks
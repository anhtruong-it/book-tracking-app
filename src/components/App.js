/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";

function App() {
  let navigate = useNavigate();
 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  


  return (
    /*
    <div className="open-search">
    <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
  </div>
  */
   
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListBooks books={books}/>
        }
        />

        <Route
          path="/search"
          element={
            <SearchBooks books={books}/>
          }
          />
    </Routes>
    
  );
};

export default App;

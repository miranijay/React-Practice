import React from "react";
import './index.css'
import { books } from "./data/books.js";
import Book from "./components/book.jsx";
import People from "./components/people.jsx";
import FetchData from "./components/fetch.jsx";

export default function BookList() {
  
  return(
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
      {books.map((book, index) => {
        return(
          <Book {...book} key={book.id} number={index} />
          )
        })}
      </section>

      <div>
        <People/>
      </div>

      <div>
        <FetchData />
      </div>
    </>
  )
};
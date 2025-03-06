import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { books } from "./books.js";
import Book from "./book.jsx";

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
    </>
  )
};


// https://www.amazon.in/gp/bestsellers/books
import React from "react";
import './index.css'
import { books } from "./data/books.js";
import Book from "./components/book.jsx";
import People from "./components/people.jsx";
import FetchData from "./components/fetch.jsx";
import MultipleReturnsFetchData from "./components/fetching_data.jsx";
import ToggleComponent from "./components/toggle.jsx";
import UserChallenge from "./components/user-challenge.jsx";
import ConditionalRendering from "./components/conditional_Rendering.jsx";

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

      <div>
        <MultipleReturnsFetchData />
      </div>

      <div>
        <ToggleComponent />
      </div>

      <div>
        <UserChallenge />
      </div>

      <div>
        <ConditionalRendering />
      </div>
    </>
  )
};
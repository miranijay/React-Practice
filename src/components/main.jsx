import { books } from "../data/books.js";
import Book from "./book.jsx";
import People from "./people.jsx";
import FetchData from "./fetch.jsx";
import MultipleReturnsFetchData from "./fetching_data.jsx";
import ToggleComponent from "./toggle.jsx";
import UserChallenge from "./user-challenge.jsx";
import ConditionalRendering from "./conditional_Rendering.jsx";
import { people } from "../data/data.js";
import Person from "./leverage_js.jsx";


export default function Components() {

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

            <div>
                <h1>Leverage JavaScript</h1>
                {people.map((person) => {
                return <Person key={person.name} {...person} />
                })}
            </div>
        </>
    )
}
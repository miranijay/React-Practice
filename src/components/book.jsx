// For Book Component

const Book = ({ img, title, author, number}) => {  //logic to display each book
    return(
      <article className="book">
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">{`# ${number + 1}`}</span>
      </article>
    )
};

export default Book;
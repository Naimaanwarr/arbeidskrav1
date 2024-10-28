import React, {useState} from 'react';
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function BookForm({onNewBook}) {

    const [title, setTitle] = React.useState("");

    function handleNewAdd(e) {
        e.preventDefault();
        onNewBook({title})
        setTitle("");
    }

    return <form onSubmit={handleNewAdd}>
        <label>
            Title:<input
            type="text"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            />
        </label>
        <button>Add</button>
    </form>;
}

function LibraryApplication() {

    const [books, setBooks] = useState([])

    function handleNewBook(book) {
        setBooks(prevBooks => [...prevBooks, book]);
    }

    return <>
        <h1>Books I want to read</h1>

        <ul>
            {books.map((book) => (<li>{book.title}</li>))}
        </ul>

        <BookForm onNewBook={handleNewBook} />

        </>;
}

root.render(<LibraryApplication  />)
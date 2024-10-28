import React, {useState} from 'react';
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function BookForm({onNewBook}) {

    const [title, setTitle] = React.useState("");

    function handleNewAdd(e) {
        e.preventDefault();
        const book ={title};
        onNewBook({title});
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

    async function handleNewBook(book) {
        setBooks(prevBooks => [...prevBooks, book]);

        await fetch("/api/books", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })

    }



    return <>
        <h1>Books I want to read</h1>

            {books.map((book, index) => (
                <div key={index}>
                    <input type="checkbox"/>
                    {book.title}
                </div>
            ))}

        <BookForm onNewBook={handleNewBook}/>

    </>;
}

root.render(<LibraryApplication/>)
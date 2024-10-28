import express from "express";

const app = express();
app.use(express.json());

const tasks = [{
    title: "the book from the server"
}];

app.get("/api/books", (req, res) => {
    res.send(tasks)
})

app.post("/api/books", (req, res) => {
    const {title} = req.body;
    const book = {title}
    tasks.push(book);
    res.send(200);
})

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);


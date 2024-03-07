import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.put('/user/glauco', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/glauco', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/glauco', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});
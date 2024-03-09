import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
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
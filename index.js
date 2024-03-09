import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var userName = "";

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/login', (req, res) => {
    userName = req.body["username"];
    res.send(`<h1>Welcome ${userName}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});
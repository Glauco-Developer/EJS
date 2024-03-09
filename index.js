import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware Function
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/public/dashboard.html");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});
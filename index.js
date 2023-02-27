const express = require('express');
const cors = require("cors");
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());


const port = 8000;


app.listen(port, () => {
    console.log("server is live....")
});

//

// const books = [
//     { title: 'Harry Potter', id: 1 },
//     { title: 'Twilight', id: 2 },
//     { title: 'Lorien Legacies', id: 3 }
// ]

// //READ 
// app.get('/', (req, res) => {
//     res.send('Welcome to REST API with Node.js !!');
// });

// app.get('/api/books', (req, res) => {
//     res.send(books);
// });

// app.get('/api/books/:id', (req, res) => {
//     const book = books.find(c => c.id === parseInt(req.params.id));

//     if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
//     res.send(book);
// });

// app.post("/signin", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     if (!email || !password) {
//         res.status(400).send("Error!1")
//     } else {
//         res.send(email && password)
//     }

// });




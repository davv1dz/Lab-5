const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    //Sends a text back in respone
  res.send('Hello!');
})

//Get method from index.html form
app.get('/name', (req, res) => {
  console.log(req.query.fname);
  //Display first and last name entered
  res.send('Hello '+ req.query.fname +' '+ req.query.lname);
})

//Post method from index.html form
app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('Hello '+ req.body.fname +' '+ req.body.lname+' From post method');
  })

//Importing books API
app.get('/api/books',(req, res) => {
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }            
        ];
    //Server return required json books data                
    res.status(200).json({
        //Array of my books
        mybooks:books
    });
})

//Server sends back the path to index file
app.get('/test',(req, res) => {
    //Path to index file
    res.sendFile(__dirname + '/index.html');
})

app.get('/datarep',(req, res) => {
    res.send('Hello from Data Rep');
})

app.get('/hello/:name',(req, res) => {
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
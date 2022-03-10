const express = require('express');
const res = require('express/lib/response');

// initialize  express app
const app = express();

// import data.json
const courses = require('./data.json');                                                                                                                                                                
app.get('/', (req,res) => {
    res.send('Hello world');
})

// import data from data.json
// const courses = require('./data.json');

// endpoints
app.get('/api/users/', (req,res) => {
    res.send(['Zachy','Moseti','Rodgers','Nduva','Tech_G']);
})

// route parameters
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params)
})

// fetch using id
app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));

    if ( !course ) res.status(404).send('The program with the given ID cannot be found');
    res.send( course );
})

// port variable
let port = process.env.PORT || 3000

// listen to port 3000
app.listen(port, () => console.log(`Listening to port ${ port }`));
const express = require('express');

// initialize  express app
const app = express();

let courses = [
    { id: 1, name: 'comp scie' },
    { id: 2, name: 'medicine'},
]
app.get('/', (req,res) => {
    res.send('Hello world');
})

// endpoints
app.get('/api/users/:id', (req,res) => {
    res.send(['Zachy','Moseti','Rodgers','Nduva','Tech_G']);
})

// route parameters
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params)
})

// querying using id
app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send('The requested course with given ID was not found');
    }
    else {
        res.send(course)
    }
})


// port variable
let port = process.env.PORT || 3000

// listen to port 3000
app.listen(port, () => console.log(`Listening to port ${ port }`));
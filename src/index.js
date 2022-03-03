const express = require('express');

// initialize  express app
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world');
})

// endpoints
app.get('/api/courses', (req,res) => {
    res.send(['Zachy','Moseti','Rodgers','Nduva','Tech_G']);
})

// route parameters
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params)
})

// port variable
let port = process.env.PORT || 3000
// listen to port 3000
app.listen(port, () => console.log(`Listening to port ${ port }`));
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
// port variable
let port = 3000;
// listen to port 3000
app.listen(port, () => console.log(`Listening to port ${ port }`));
const express = require('express');

// initialize  express app
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world');
})

// port variable
let port = 3000;
// listen to port 3000
app.listen(port, () => console.log(`Listening to port ${ port }`));
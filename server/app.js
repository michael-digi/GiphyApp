// import express (after npm install express)
const express = require('express');
// create new express app and save it as "app"
const app = express();
// server configuration
const PORT = 8080;
const helmet = require('helmet')
const cors = require('cors');

app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json());

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
}); 

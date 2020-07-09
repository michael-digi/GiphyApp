// import express (after npm install express)
const express = require('express');
// create new express app and save it as "app"
const app = express();
require('dotenv').config()
// server configuration
const PORT = 8080;
const helmet = require('helmet')
const cors = require('cors');
const { giphyAPI } = require('./helpers');

app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json());

// route access from the front end to query the GIPHY api
app.get('/giphy', giphyAPI);

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
}); 

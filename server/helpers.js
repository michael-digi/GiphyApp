const axios = require('axios')
const key = process.env.KEY

// GIPHY api call, minimum parameters are the api and a term
const giphyAPI = async (req, res) => {
  try {
    let gifs = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: key,
        q: req.query.term
      }
    })
    res.send(gifs.data)
  } catch(err) {
    res.send(err);
  }
}

module.exports = {
  giphyAPI
}
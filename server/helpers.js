const axios = require('axios')
const key = process.env.KEY

const giphyAPI = async (req, res) => {
  let gifs = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: key,
      q: req.query.term
    }
  })
  res.send(gifs.data)
}

module.exports = {
  giphyAPI
}
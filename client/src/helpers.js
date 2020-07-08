import axios from 'axios';

export async function giphyAPI(input) {
  let gifs = await axios.get('/giphy', {
    params: {
      term: input
    }
  })
  return gifs.data
}
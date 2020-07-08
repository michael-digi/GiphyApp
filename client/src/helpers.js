import React from 'react';
import axios from 'axios';
import Gif from './Gif';

export async function giphyAPI(input) {
  let gifs = await axios.get('/giphy', {
    params: {
      term: input
    }
  })
  return gifs.data
}

export function makeGifCards(gifs) {
  let cards = []
  gifs.forEach((gif, index) => {
    cards.push(
      <Gif 
        url={gif.images.fixed_height_downsampled.url} 
        key={index} 
        redirect_url={gif.bitly_url}/>
    )
  })
  return cards
}
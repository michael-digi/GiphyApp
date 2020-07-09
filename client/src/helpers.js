import React from 'react';
import axios from 'axios';
import Gif from './Gif';

//calls the node.js backend with the input from the user
export async function giphyAPI(input = '') {
  try {
    let gifs = await axios.get('/giphy', {
      params: {
        term: input
      }
    })
    return gifs.data
  } catch(err) {
    console.log(err)
  }
}

//this function accepts an array of gif data from GIPHY, it iterates through and extracts key info (gif url,
//title etc) and passes it as props to each instance of <Gif /> one by one. Each is pushed into a cards array
//to be conveniently displayed
export function makeGifCards(gifs = []) {
  let cards = []
  let title;
  gifs.forEach((gif, index) => {
    gif.title ? title = gif.title : title = 'funny gif'
    cards.push(
      <Gif 
        url={gif.images.fixed_height_downsampled.url} 
        title={title}
        key={index} 
        redirect_url={gif.bitly_url}/>
    )
  })
  return cards
}
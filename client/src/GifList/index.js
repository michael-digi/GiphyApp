import React, { useState, useEffect } from 'react';
import { makeGifCards } from '../helpers';
import './GifList.css';

function GifList(props) {
  const [gifList, setGifList] = useState([])
  
  useEffect(() => {
    setGifList([])
    console.log(props.gifs)
    let gifCards = makeGifCards(props.gifs)
    setGifList(gifCards)
  }, [props.gifs])
  
  return (
    <div id ='gifContainer'>
      {gifList}
    </div>
  )
}

export default GifList;
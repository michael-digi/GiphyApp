import React, { useState, useEffect } from 'react';
import { makeGifCards } from '../helpers';
import './GifList.css';
import LoadingSpinner from '../LoadingSpinner';

function GifList(props) {
  const [gifList, setGifList] = useState([])
  
  useEffect(() => {
    setGifList([])
    //if there is an error message, set the error to be displayed
    if (props.error.length !== 0) {
      setGifList(props.error)
    }
    else {
      //if the array has items, meaning there were responses, call helper function to create cards for them
      if (props.gifs.length !== 0) {
        let gifCards = makeGifCards(props.gifs)
        setGifList(gifCards)
      }
      //if array has no items, there were no results
      else {
        setGifList('No results to display')
      }
    }
  }, [props.gifs, props.error])
  
  return (
    <div id ='gifContainer'>
      {props.loading ? <LoadingSpinner /> : gifList}
    </div>
  )
}

export default GifList;
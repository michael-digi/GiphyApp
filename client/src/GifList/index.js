import React, { useState } from 'react';
import Gif from '../Gif'
import './GifList.css';

function GifList(props) {
  console.log(props.gifs)
  return (
    <div id ='gifContainer'>
      <Gif />
      <Gif />
      <Gif />
      <Gif />
      <Gif />
      <Gif />
    </div>
  )
}

export default GifList;
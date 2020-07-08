import React, { useState } from 'react';
import Gif from '../Gif'
import './GifList.css';

function GifList() {

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
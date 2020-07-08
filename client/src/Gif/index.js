import React, { useState } from 'react';
import './Gif.css';

function Gif(props) {
  return (
    <div id ='gif' onClick={() => window.open(props.redirect_url, '_blank')}>
      <img src={props.url} height={'250px'} width={'100%'} />
    </div>
  )
}

export default Gif;
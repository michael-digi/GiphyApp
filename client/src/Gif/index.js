import React from 'react';
import './Gif.css';

function Gif(props) {
  //opens to the GIPHY page for the gif on click
  return (
    <div id ='gif' onClick={() => window.open(props.redirect_url, '_blank')}>
      <img src={props.url} height={'250px'} width={'100%'} alt={props.title} />
    </div>
  )
}

export default Gif;
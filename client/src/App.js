import React, { useState } from 'react';
import SearchBar from './SearchBar';
import GifList from './GifList';
import { giphyAPI } from './helpers';
import './App.css';

function App() {
  const [gifs, setGifs] = useState([])
  const handleSubmit = async (input) => {
    let gifs = await giphyAPI(input)
    setGifs(gifs.data)
  }
  
  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default App;

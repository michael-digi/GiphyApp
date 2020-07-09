import React, { useState } from 'react';
import SearchBar from './SearchBar';
import GifList from './GifList';
import { giphyAPI } from './helpers';
import './App.css';

function App() {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (input) => {
    //on submission, set the error state fresh, clear out the previous gifs response, and set loading to true
    //to display the spinner
    setError('')
    setGifs([])
    setLoading(true)
    try {
      let gifs = await giphyAPI(input)
      setGifs(gifs.data)
      setLoading(false)
    } catch(err) {
      setError('Error, please try again')
      setLoading(false)
    }
  }
  
  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmit} />
      <GifList gifs={gifs} loading={loading} error={error} />
    </div>
  );
}

export default App;

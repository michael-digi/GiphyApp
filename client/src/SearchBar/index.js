import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) props.handleSubmit(input)
  }

  return (
    <div id ='searchBar' onKeyDown={handleKeyDown}>
      <h1> Giphy </h1>
      <input type='text' id='userInput' placeholder='Search GIPHY' onChange={(e) => handleChange(e)} />
      <button id='searchButton' onClick={() => props.handleSubmit(input)}> Search </button>
    </div>
  )
}

export default SearchBar;
import React, { useState } from 'react';
import icon from './iconmonstr-search-thin.svg'
import giphy from './giphy.svg'
import './SearchBar.css';

function SearchBar(props) {
  const [input, setInput] = useState('')

  //called on every keystroke
  const handleChange = e => {
    setInput(e.target.value)
  }

  //allows submission of query by pressing the 'Enter' button
  const handleKeyDown = e => {
    if (e.keyCode === 13) props.handleSubmit(input)
  }

  return (
    <div id ='searchBarContainer' onKeyDown={handleKeyDown}>
      <div id='header'>
        <img src={giphy} alt='giphy logo' onClick={() => window.location.reload()}/>
        <h1 onClick={() => window.location.reload()}> Giphy </h1>
      </div>
      <div id='inputDiv'>
        <input type='text' id='userInput' placeholder='Search GIPHY' onChange={(e) => handleChange(e)} />
        <button id='searchButton' onClick={() => props.handleSubmit(input)}> 
          <img src={icon} alt='search bar icon' /> 
        </button>
      </div>
    </div>
  )
}

export default SearchBar;
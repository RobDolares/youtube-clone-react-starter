import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/search_bar";

const yt_api_key = `${process.env.REACT_APP_YOUTUBE_API_KEY}`

console.log(yt_api_key);

// Create a new component.  This component should produce some html
const App = () => {
  return (
  <div>
      <SearchBar />
  </div>
  )
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

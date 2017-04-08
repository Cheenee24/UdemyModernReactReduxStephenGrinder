import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBj_VaqNTK6WovrCdN_4Q1IiTgsH0r0mpY';

// Create a new component. this component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>);
}



// Take this component's generate HTML and put it
// on the page (in DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));

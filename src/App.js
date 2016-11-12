import React, { Component } from 'react';

import Navbar from './Navbar.js';
import Searchform from './Searchform.js';
import Searchresults from './Searchresults.js';
import sampleSearchResult from './sampleSearchResult.js';
import './App.css';

let searchResult = sampleSearchResult();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: searchResult['artists']['items']
    };
  }

  render() {
    return (
      <div>
      <Navbar />
      <Searchform />
      <Searchresults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;


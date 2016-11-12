
import React, { Component } from 'react';

import Navbar from './Navbar.js';
import Searchform from './Searchform.js';
import Searchresults from './Searchresults.js';
import sampleSearchResult from './sampleSearchResult.js';
import './App.css';
import SpotifyApi from './SpotifyApi.js';

let searchResult = sampleSearchResult();

class App extends Component {
  constructor(props) {
    super(props);
    this.filterOptions = ['Album','Artist','Playlist','Track']
    this.state = {
      searchTerm: 'sam',
      filterBy: '',
      searchInProgress: '',
      searchResults: searchResult['artists']['items']
    };

    this.onUpdateFilter = this.onUpdateFilter.bind(this);
    this.onUpdateSearchTerm = this.onUpdateSearchTerm.bind(this);
    this.spotify = new SpotifyApi();
  }

  onUpdateFilter(filter) {
    console.log("Called updateFilterBy with",  filter);
    this.setState({filterBy: filter});
    this.updateResults();
  }

  onUpdateSearchTerm(searchTerm) {
    console.log("Called update search Term with", searchTerm);
    this.setState({searchTerm: searchTerm});
    this.updateResults();
  }

  updateResults() {
    this.setState({searchInProgress: true});
    this.spotify.search(this.state.filterBy, this.state.searchTerm, (function(apiResponse){
      this.setState({searchInProgress: false})
      console.log(apiResponse)
    }).bind(this));
  }

  resultCount() {
    return this.state.searchResults.length;
  }

  
  render() {
    return (
      <div>
      <Navbar onUpdateFilter={this.onUpdateFilter} resultCount={this.resultCount()} filterOptions={this.filterOptions}/>
      <Searchform searchTerm={this.state.searchTerm} onSearchSubmit={this.onUpdateSearchTerm} searchInProgress={this.state.searchInProgress}/>
      <Searchresults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;

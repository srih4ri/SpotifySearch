import React, { Component } from 'react';

import Navbar from './Navbar.js';
import Searchform from './Searchform.js';
import Searchresults from './Searchresults.js';
import './App.css';
import SpotifyApi from './SpotifyApi.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterOptions = ['Album','Artist','Playlist','Track']
    this.state = {
      searchTerm: 'Rage Against the Machine',
      filterBy: 'Album',
      searchInProgress: '',
      searchResults: [],
      apiError: ''
    };

    this.onUpdateFilter = this.onUpdateFilter.bind(this);
    this.onUpdateSearchTerm = this.onUpdateSearchTerm.bind(this);
    this.spotify = new SpotifyApi();
  }

  componentWillMount() {
    const filterBy = this.props.params.filterBy || 'Album';
    const searchTerm = this.props.params.searchTerm;
    this.setState({filterBy: filterBy, searchTerm: searchTerm});
  }

  onUpdateFilter(filter) {
    console.log("Called updateFilterBy with",  filter);
    this.setState({filterBy: filter});
  }

  onUpdateSearchTerm(term) {
    console.log("Called update search Term with", term);
    if(this.state.filterBy === ''){
      this.setState({apiError: 'Please choose a filter criteria'});
      return false;
    }
    this.setState({searchTerm: term},function(){
      this.updateResults();
    });
  }

  parseResults(apiResponse) {
    let apiResponseKey = this.state.filterBy.toLowerCase() + "s";
    return(apiResponse[apiResponseKey].items);
  }

  updateResults() {
    this.setState({searchInProgress: true});
    this.spotify.search(this.state.filterBy, this.state.searchTerm, (function(apiResponse){
      this.setState({searchInProgress: false})
      if(apiResponse.error !== undefined){
        this.setState({searchResults: [], apiError: apiResponse.error.message});
      } else {
        console.log(apiResponse);
        this.props.router.replace("/"+this.state.filterBy+"/" +this.state.searchTerm)
        this.setState({searchResults: this.parseResults(apiResponse), apiError: ''})
      }
    }).bind(this));
  }

  resultCount() {
    return this.state.searchResults.length;
  }

  
  render() {
    return (
      <div>
      <Navbar currentFilter={this.state.filterBy}
      onUpdateFilter={this.onUpdateFilter}
      resultCount={this.resultCount()}
      filterOptions={this.filterOptions}  />

      <Searchform searchTerm={this.state.searchTerm}
      onSearchSubmit={this.onUpdateSearchTerm}
      searchInProgress={this.state.searchInProgress}
      apiError={this.state.apiError}/>

      <Searchresults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;

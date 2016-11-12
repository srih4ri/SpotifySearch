import React, { Component } from 'react';

const SearchResult = ({albumArtUrl, name}) => {
  return(
    <li>
    <div className="col-sm-3 col-md-2">
    <div className='thumbnail'>
    <img role='presentation' className='thumb' src={albumArtUrl}/>
    </div>
    <span>{name}</span>
    </div>
    </li>
  );
}

class Searchresults extends Component {

  renderSearchResults() {
    return (
      this.props.searchResults.map(function(searchResult){
        return (<SearchResult name={searchResult.name} albumArtUrl={(searchResult.images[0]||{}).url} key={searchResult.id}/>);
      })
    );
  }
  render() {
    return(
      <div className="container">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
      <ul className="results">
      { this.renderSearchResults() }
      </ul>
      </div>
      </div>
    );
  }
}

export default Searchresults;

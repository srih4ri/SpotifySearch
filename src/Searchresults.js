import React, { Component } from 'react';
import _ from 'underscore';

const SearchResult = ({albumArtUrl, name, spotifyUrl}) => {
  return(
    <li>
    <img role='presentation' className='thumb' src={albumArtUrl}/>
    <span><a href={spotifyUrl} target='_blank'>{name}</a></span>
    </li>
  );
}

class Searchresults extends Component {

  parseAlbumArt(searchResult){
    let images = [];
    if (searchResult.album !== undefined){
      images = searchResult.album.images;
    }
    if (searchResult.images !== undefined){
      images = searchResult.images;
    }
    const albumArt = _.find(images,function(image) {
      return (image.width && image.width < 65);
    }) || {};
    return albumArt.url;
  }

  renderSearchResults() {
    return (
      this.props.searchResults.map(function(searchResult){
        let albumArt = this.parseAlbumArt(searchResult);
        return (<SearchResult name={searchResult.name} albumArtUrl={albumArt} spotifyUrl={searchResult.external_urls.spotify} key={searchResult.id}/>);
      }, this)
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

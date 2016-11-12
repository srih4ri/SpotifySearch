import 'whatwg-fetch';

class SpotifyApi {
  constructor() {
    this.searchApiEndpoint = 'https://api.spotify.com/v1/search'
  }

  search(filter, searchTerm, successCallback, errorCallback) {
    let apiParams = {
      q: searchTerm,
      type:  filter,
    };

    var query = Object.keys(apiParams)
                      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(apiParams[k]))
                      .join('&');

    fetch(this.searchApiEndpoint + '?' + query)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log("Calling callback for query", apiParams)
        successCallback(json);
      }).catch(function(ex) {
        console.log('API Request failed', ex)
      });
  }
}

export default SpotifyApi;

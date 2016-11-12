class SpotifyApi {
  constructor() {
  }

  search(filter, searchTerm, callback) {
    console.log("Searched spotify with", filter, searchTerm);
    callback(['Sam Alex']);
  }
}

export default SpotifyApi;

#Spotify Search

This is the source code for [Spotify Search](http://srvr.in/SpotifySearch) .

Spotify Search let's us search spotify for Tracks, Albums, Artists and Playlists.

It leverages the [web api](https://developer.spotify.com/web-api/) from spotify to provide search results.

## Development

This app is built using facebook’s [Create React App](https://github.com/facebookincubator/create-react-app) tool.

For making changes :

1) Clone this repository. 

`git clone https://github.com/srih4ri/SpotifySearch.git`

2) Install the required npm packages by running :
`cd SpotifySearch`
`npm install` 

3) Run the development server by running :
`npm start`

4) Look at [Directory structure](#directory-structure-and-files), and make required changes.

5) When satisfied with the output, generate a build using 

`npm run build`

6) This project is setup to be deployed to github pages, to deploy the build to github pages, run :

`npm run deploy`


## Directory structure and files
`src` folder has all the source code - including react components and css files.

###Entry point
```
index.js
```

###Components:
```
App.js
Navbar.js
Searchform.js
Searchresults.js
```

###CSS
```
index.css
```

###Spotify API client
```
SpotifyApi.js
```





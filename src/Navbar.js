import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">

      <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <div className="navbar-brand" href="#"><i className="fa fa-rebel" aria-hidden="true"></i></div>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
      <li className="dropdown active">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className="caret"></span></a>
      <ul className="dropdown-menu">
      <li><a href="#">Album</a></li>
      <li><a href="#">Artist</a></li>
      <li><a href="#">Playlist</a></li>
      <li><a href="#">Track</a></li>
      </ul>
      </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li className="counter">Counter</li>
      </ul>
      </div>
      </div>
      </div>
      </nav>);
  }
}

export default Navbar;

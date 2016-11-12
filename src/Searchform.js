import React, { Component } from 'react';

class Searchform extends Component {
  render() {
    return(
      <div className="container">
      <form className="form-horizontal">
      <div className="form-group form-group-lg">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
      <input className="form-control" type="text" id="formGroupInputLarge" placeholder="Search..." />
      <a className="search-icon" href=""><i className="fa fa-search" aria-hidden="true"></i></a>
      <p className="error">Please fill out the form.</p>
      </div>
      </div>
      </form>
      </div>
    );
  }
}

export default Searchform;

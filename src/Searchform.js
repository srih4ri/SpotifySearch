import React, { Component } from 'react';

class Searchform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm
    }
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);

  }

  onSearchTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onSearchSubmit(event) {
    console.log("Submitted with ", event, this.state.searchTerm)
    this.props.onSearchSubmit(this.state.searchTerm);
    event.preventDefault();
    return false;
  }

  render() {
    return(
      <div className="container">
      <form className="form-horizontal" onSubmit={this.onSearchSubmit}>
      <div className="form-group form-group-lg">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
      <input className="form-control" type="text" id="formGroupInputLarge" placeholder="Search..." value={this.state.searchTerm} onChange={this.onSearchTermChange}/>
      <a type='submit' className="search-icon" href="" onClick={this.searchSubmit}>
      <i className="fa fa-search" aria-hidden="true" />
      </a>
      <p className="error">Please fill out the form.</p>
      </div>
      </div>
      </form>
      </div>
    );
  }
}

export default Searchform;

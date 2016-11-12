import React, { Component } from 'react';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.onFilterUpdate = this.onFilterUpdate.bind(this);
  }

  onFilterUpdate(event) {
    this.props.onFilterClicked(event.target.text);
  }

  renderFilterOptions() {
    return this.props.filterOptions.map(function(option){
      return(<li key={option}><a href="#" onClick={this.onFilterUpdate}>{option}</a></li>)
    }, this);
  }

  render() {
    return(
      <li className="dropdown active">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className="caret"></span></a>
      <ul className="dropdown-menu">
      {this.renderFilterOptions()}
      </ul>
      </li>
    );
  }
}
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
      <Filter filterOptions={this.props.filterOptions} onFilterClicked={this.props.onUpdateFilter}/>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li className="counter">{this.props.resultCount}</li>
      </ul>
      </div>
      </div>
      </div>
      </nav>);
  }
}

export default Navbar;

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
    return this.props.filterOptions.map(function mapFilters(option) {
      return (<li key={option}><a href="#" onClick={this.onFilterUpdate}>{option}</a></li>);
    }, this);
  }

  render() {
    return (
      <li className="dropdown active">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.currentFilter}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {this.renderFilterOptions()}
        </ul>
      </li>
    );
  }
}

Filter.propTypes = {
  onFilterClicked: React.PropTypes.func,
  currentFilter: React.PropTypes.string,
  filterOptions: React.PropTypes.array,
};

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand">
                <i className="fa fa-rebel" aria-hidden="true"></i>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <Filter filterOptions={this.props.filterOptions} onFilterClicked={this.props.onUpdateFilter} currentFilter={this.props.currentFilter}/>
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

Navbar.propTypes = {
  filterOptions: React.PropTypes.array,
  onUpdateFilter: React.PropTypes.func,
  currentFilter: React.PropTypes.string,
  resultCount: React.PropTypes.number,
};

export default Navbar;

import React, { Component } from 'react';

class SearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Photos..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}

export default SearchForm;
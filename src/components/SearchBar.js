import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);//calling parent method of react component

    this.state = {
      term: ''
    };
  }


  render() {
    return (
      <div className="search-bar">
        <input onChange={ (event) => this.onInputChange( event.target.value )} />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;

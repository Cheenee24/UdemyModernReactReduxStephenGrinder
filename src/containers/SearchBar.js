import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/Index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};

    // You need to bind this function to this class
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    // console.log(event.target.value);
    // if you have a callback that reference "this" you'll need to bind it
    // or use arrow function of ES6
    this.setState({ term:event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();//this will prevent reloading when enter is press

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
              placeholder="Get a Five days forecast in your favorite cities"
              className="form-control"
              value={ this.state.term }
              onChange={ this.onInputChange }/>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    );
  }
}

// function mapStateToProps(state){
//   return {
//
//   }
// }

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

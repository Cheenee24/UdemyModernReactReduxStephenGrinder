import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

const API_KEY = 'AIzaSyBj_VaqNTK6WovrCdN_4Q1IiTgsH0r0mpY';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Kpop');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term},(videos) =>{
      console.log("youtube: ", videos);
      /**
      * same as this: this.setState({videos: videos});
      */
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });
  }


  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetails video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos } />
      </div>
    );
  }
}

// Take this component's generate HTML and put it
// on the page (in DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));

import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import unsplash from './api'
import ImageList from './ImageList';
import ImageCard from './ImageCard'

class App extends React.Component{
  state = { images : [] }
  
  onSearchSubmit = async (text) => {
    const response = await unsplash.get('/search/photos', {
      params: {query : text},
    });
    this.setState({ images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyBA9M7fFiZceBvdDfF1fr1kiOEpOfZhYhA';

class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    onTextSubmit = async text => {
        const response = await youtube.get("/search", {
          params: {
            q: text,
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        });

        this.setState({
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo : video})
    }

    componentDidMount() {
        this.onTextSubmit('buildings')
    }

    render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onTextSubmit}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos}
                />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
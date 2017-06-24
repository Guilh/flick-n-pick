import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import { apiKey } from './config.js';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  state = {
    photos: [],
    loading: true
  }
   
  componentDidMount() {
    this.fetch(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    let routeChanged = nextProps.data !== this.props.data;
    if (routeChanged) {
      this.fetch(nextProps.data);
    }
  }

  fetch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          photos: response.data.photos.photo,
          loading: false 
        });
      })  
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });  
  }

  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        {
          (this.state.loading)
           ? <p>Loading...</p>
           : <PhotoList data={this.state.photos} />
        }        
      </div>
    )
  }
}

export default PhotoContainer;
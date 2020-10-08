import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import { apiKey } from './config.js';

class PhotoContainer extends Component {

  state = {
    photos: [],
    loading: true
  }

  componentDidMount() {
    this.fetch(this.props.data);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.fetch(this.props.data);
    }
  }

  fetch = (query) => {
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=1&query=${query}&per_page=12`)
      .then(response => {
        console.log(response.data.results)
        this.setState({
          photos: response.data.results,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    const { title } = this.props;
    return (
      <div className="photo-container">
        <h2>{ this.state.photos.length ? title : ''}</h2>
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

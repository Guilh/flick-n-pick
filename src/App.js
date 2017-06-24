import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Best of Flickr Photo Gallery</h1>
        <BrowserRouter>
          <div>
            <Route component={SearchForm} />
            <Nav/>
            <Switch>
              <Route exact path="/" render={ () => <PhotoContainer data={'cats'} /> } />
              <Route path="/:category" render={ ({match}) => <PhotoContainer data={match.params.category} title={match.params.category} /> } /> 
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

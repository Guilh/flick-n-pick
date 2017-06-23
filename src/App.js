import React, { Component } from 'react';

//App Components
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
              <Route exact path="/" render={ () => <PhotoContainer data={'/cars'} /> } />
              <Route path="/:category" render={ ({match}) => <PhotoContainer data={match.url} title={match.url} /> } /> 
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

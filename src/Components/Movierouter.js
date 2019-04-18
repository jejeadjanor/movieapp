import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Movies from './Movies'



class Movierouter extends Component {
  render() {
    return (
      <div >
        <Route exact path='/' component={Movies} />
      </div>
    );
  }
}

export default Movierouter;
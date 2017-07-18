import React, { Component } from 'react';
import './App.css';
import ComponentBox from './ComponentBox';
import PostBody from './PostBody';
class App extends Component {
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody />
        </div>
        <div className="bottom clearfix">
          <ComponentBox />
        </div>
      </div>
    )
  }
}

export default App;

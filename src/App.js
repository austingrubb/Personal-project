import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './component/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='site-content-container'>
          {routes()}
        </div>
      </div>
    );
  }
}

export default App;

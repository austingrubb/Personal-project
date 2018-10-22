import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='site-content-container'>
          {routes()}
        </div>
        <Footer/>
      </div>
    );
  }
}


export default App;

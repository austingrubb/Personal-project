import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import store from './ducks/store';

const render = () => {
    ReactDOM.render(
        <AppContainer>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </AppContainer>
    , document.getElementById('root'));
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
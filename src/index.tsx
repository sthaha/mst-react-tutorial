import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import {WishlistProvider} from './models/store';




//setInterval(() => store.items[0].changePrice(store.items[0].price + 1), 1000)
//setInterval(() => store.fetch(), 2000)
ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
      <App/>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import './App.css';
import {WishlistView} from './Wishlist';
import {WishList} from '../models/wishlist';


function App() {
  const list = WishList.create({
    items: [
      {
        name: 'foobar',
        price: 1.23,
      }
    ]
  })

  return (
    <div className="App">
      <WishlistView wishlist={list} />
    </div>
  );
}

export default App;

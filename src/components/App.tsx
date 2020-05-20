import React from 'react';
import './App.css';
import {WishlistView} from './Wishlist'

interface IApp { }

const App: React.FC<IApp> = (props) => {

  return (
    <div className="App">
      <WishlistView />
    </div>
  );
}

export default App

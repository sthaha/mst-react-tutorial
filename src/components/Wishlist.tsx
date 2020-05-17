import React from 'react';
import {IWishList} from '../models/wishlist';


interface IWishlistEntry {
  name: string
  price: number
  url?: string
}

export const WishlistEntry: React.FC<IWishlistEntry> = (props) => {
  const {name, url, price} = props
  return (
    <li>
      <h3> {name}</h3>
      <p> {price}</p>
      { url &&  <img src={url} alt={name} /> }
    </li>
  )
}

interface IWishlistView {
  wishlist: IWishList
}



export const WishlistView: React.FC<IWishlistView> = (props) => {
  const {wishlist} = props;

  return (
    <div>
      <ul>
        { wishlist.items.map( (item, idx) => <WishlistEntry key={idx} {...item} />) }
      </ul>
      <p> Total: {wishlist.totalPrice} </p>
    </div>
  )
}

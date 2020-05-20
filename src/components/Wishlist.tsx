import React from 'react';

import {IWishlistItem} from '../models/wishlist';
import {useWishlist} from '../models/store';

interface IWishlistEntry {
  name: string
  price: number
  url?: string
}

export const WishlistItem: React.FC<IWishlistEntry> = (props) => {
  const {name, url, price} = props
  return (
    <li className="item">
      <h3> {name}</h3>
      { url &&  <img src={url} alt={name} /> }
      <span> {price}</span>
    </li>
  )
}


export interface IWishlistView {
  //wishlist: IWishlist
}


export const WishlistView: React.FC<IWishlistView> = (props) => {
  const wishlist = useWishlist()
  return (
    <div>
      <ul>
        { wishlist.items.map((item: IWishlistItem, idx: number) => <WishlistItem key={idx} {...item} />) }
      </ul>
      <span> Total: {wishlist.totalPrice} </span>
    </div>
  )
}

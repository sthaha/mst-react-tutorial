import React from 'react';
import {Wishlist} from './wishlist'


const WishlistContext = React.createContext(Wishlist.create())

export const useWishlist = ()  => React.useContext(WishlistContext)

export const WishlistProvider = ({children}: any) => {
  const store = Wishlist.create({
    items: [
      {
        name: 'Ever changing price',
        price: 1.23,
      },
      {
        name: 'Me',
        price: 1.23,
        url: "https://avatars3.githubusercontent.com/u/47602533?s=20&v=4"
      }
    ]
  })

  return (
    <WishlistContext.Provider value={store}>
      {children}
    </WishlistContext.Provider>
  )
}


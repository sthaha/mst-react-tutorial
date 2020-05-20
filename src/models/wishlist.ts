import {types, Instance} from 'mobx-state-tree';


export const WishlistItem = types
  .model({
    name: types.string,
    price: types.number,
    url: "",
  })
  .actions( self => {
    const changeName = (name: string) => {self.name = name}

    return {
      changeName,
      changePrice(x: number){
        self.price = x
      }
    }
  })


  type FilterFn = (x: IWishlistItem) => boolean


  export const Wishlist = types
    .model({
      items: types.optional(types.array(WishlistItem), [])
    })
    .actions(self => ({
      add(item: IWishlistItem){
        self.items.push(item)
      },
    }))
    .actions(self => ({
      fetch() {
        //setTimeout(() => { self.add({name: 'foobar', price: Math.random() * 100}) }, 1000)
      },
    }))
    .views(self => ({
      get totalPrice() {
        return self.items.reduce((sum, item) => sum + item.price, 0)
      },
      filter(fn: FilterFn) {
        return self.items.filter(x => fn(x))
      }
    }))


export interface IWishlistItem extends Instance<typeof WishlistItem> {}
export interface IWishlist extends Instance<typeof Wishlist> {}


import {types, Instance} from 'mobx-state-tree';

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    url: "",
  })
  .actions( self => {
    const changeName = (name: string) => {self.name = name}

    return {changeName}
  })


interface IWishListItem extends Instance<typeof WishListItem> {}

  export const WishList = types
    .model({
      items: types.optional(types.array(WishListItem), [])
    })
    .actions(self => ({
      add(item: IWishListItem){
        self.items.push(item)
      },
    }))
    .views(self => ({
      get totalPrice() {
        return self.items.reduce((sum, item) => sum + item.price, 0)
      }
    }))


export  interface IWishList extends Instance<typeof WishList> {}

import {types} from 'mobx-state-tree';

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




  export const WishList = types
    .model({
      items: types.optional(types.array(WishListItem), [])
    })
    .actions(self => ({
      add(item){
        self.items.push(item)
      },
    }))
    .views(self => ({
      get totalPrice(){
        return self.items.reduce((sum, x) => sum + x, 0)
      }
    }))


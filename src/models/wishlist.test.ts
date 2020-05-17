import {getSnapshot, onSnapshot, onPatch} from 'mobx-state-tree';
import {WishList, WishListItem } from './wishlist';


it("can create an item", () => {
  const item = WishListItem.create({
    name: 'test',
    price: 12.5,
  })

  expect(item.name).toBe('test')
  expect(item.url).toBe('')
  expect(item.price).toBe(12.5)
})

it("can rename an items", () => {
  const item = WishListItem.create({
    name: 'test',
    price: 12.5,
  })

  expect(item.name).toBe('test')
  item.changeName("foobar");
  expect(item.name).toBe('foobar')
})


it ("can create empty wishlist", () => {
  const list = WishList.create({})
  expect(list.items.length).toBe(0)

})


it("can create a wishlist", () => {

  const item1 = WishListItem.create({
    name: 'test 1',
    price: 12.5,
  })

  const item2 = WishListItem.create({
    name: 'test 2',
    price: 12.5,
  })

  const list = WishList.create({
    items: [item1, item2]
  })
})


it ("can add items to wishlist", () => {
  const list = WishList.create({})
  list.add({
    name: "something",
    price: 1.56
  })

  const first = list.items[0]

  expect(first.name).toBe("something")
  expect(first.price).toBe(1.56)

  first.changeName("foobar")
  expect(first.name).toBe("foobar")


  expect(getSnapshot(list)).toMatchSnapshot()
})


it ("can store patches of changes to wishlist", () => {
  const list = WishList.create({})

  const states = []
  onSnapshot(list, s => states.push(s))

  const patches = []
  onPatch(list, p => patches.push(p))

  list.add({
    name: "something",
    price: 1.56
  })
  const first = list.items[0]

  expect(first.name).toBe("something")
  expect(first.price).toBe(1.56)

  expect(getSnapshot(list)).toMatchSnapshot()
  expect(patches).toMatchSnapshot()
})

it("can calculate total price", () => {
  const list = WishList.create();
  expect(list.totalPrice).toBe(0);
  list.add({
    name: 'foobar',
    price: 1.23
  })
  expect(list.totalPrice).toBe(1.23);

  list.add({
    name: 'another one',
    price: 2.36,
  })
  expect(list.totalPrice).toBe(3.59);
})


import {getSnapshot, onSnapshot, onPatch} from 'mobx-state-tree';
import {Wishlist, WishlistItem } from './wishlist';


it("can create an item", () => {
  const item = WishlistItem.create({
    name: 'test',
    price: 12.5,
  })

  expect(item.name).toBe('test')
  expect(item.url).toBe('')
  expect(item.price).toBe(12.5)
})

it("can rename an items", () => {
  const item = WishlistItem.create({
    name: 'test',
    price: 12.5,
  })

  expect(item.name).toBe('test')
  item.changeName("foobar");
  expect(item.name).toBe('foobar')
})


it ("can create empty Wishlist", () => {
  const list = Wishlist.create({})
  expect(list.items.length).toBe(0)

})


it("can create a Wishlist", () => {

  const item1 = WishlistItem.create({
    name: 'test 1',
    price: 12.5,
  })

  const item2 = WishlistItem.create({
    name: 'test 2',
    price: 12.5,
  })

  const list = Wishlist.create({
    items: [item1, item2]
  })
})


it ("can add items to Wishlist", () => {
  const list = Wishlist.create({})
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


it ("can store patches of changes to Wishlist", () => {
  const list = Wishlist.create({})

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

  first.changeName("foobar")

  expect(getSnapshot(list)).toMatchSnapshot()
  expect(patches).toMatchSnapshot()
})

it("can calculate total price", () => {
  const list = Wishlist.create();
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


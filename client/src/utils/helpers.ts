import { Item, CartItem, ListItem } from './types'

export const formatPrice = (price: number): string => {
  const decimal = price / 100

  return `$${decimal.toFixed(2)}`
}

const makeItemMap = (items: Array<Item>): Map<string, Item> => {
  const mapEntries = items.map(item => [item.id, item] as [string, Item])

  return new Map<string, Item>(mapEntries)
}

export const makeListItems = (items: Array<Item>, cartItems: Array<CartItem>): Array<ListItem> => {
  const itemMap = makeItemMap(items)

  const existingCartItems = cartItems.filter(cartItem => itemMap.get(cartItem.item))

  const listItems = existingCartItems.map(cartItem => {
    const { quantity } = cartItem

    const item = itemMap.get(cartItem.item) as Item

    return { ...item, quantity }
  })

  return listItems
}

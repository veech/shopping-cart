import React, { useEffect, useState } from 'react'

import { CartService } from '../services/CartService'
import { ItemService } from '../services/ItemService'

import { List, ListItem } from '../components/list'
import { SummaryCard } from '../components/cart/SummaryCard'

import { CartItem, Item } from '../utils/types'

interface ListItem {
  id: string
  name: string
  description: string
  img: string
  price: number
  quantity: number
}

interface Props {}

const makeItemMap = (items: Array<Item>): Map<string, Item> => {
  const mapEntries = items.map(item => [item.id, item] as [string, Item])

  return new Map<string, Item>(mapEntries)
}

const makeListItems = (items: Array<Item>, cartItems: Array<CartItem>): Array<ListItem> => {
  const itemMap = makeItemMap(items)

  const existingCartItems = cartItems.filter(cartItem => itemMap.get(cartItem.item))

  const listItems = existingCartItems.map(cartItem => {
    const { quantity } = cartItem

    const item = itemMap.get(cartItem.item) as Item

    return { ...item, quantity }
  })

  return listItems
}

const fetchData = () => {
  return Promise.all([ItemService.getAll(), CartService.getAll()])
}

export const CartPage: React.FC<Props> = () => {
  const [listItems, setListItems] = useState<Array<ListItem> | null>(null)

  useEffect(() => {
    fetchData().then(([itemList, cartItemList]) => {
      const joinedItems = makeListItems(itemList, cartItemList)
      setListItems(joinedItems)
    })
  }, [])

  const subtotal = listItems?.reduce((sum, listItem) => sum + listItem.price * listItem.quantity, 0) || 0

  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-3">Cart</h3>
        {listItems ? <h5 className="subtitle is-5">{listItems?.length} items</h5> : null}

        <div className="columns">
          <div className="column is-half">
            <List>
              {listItems?.map(listItem => (
                <ListItem key={listItem.id} {...listItem} />
              ))}
            </List>
          </div>

          <div className="column">
            <SummaryCard subtotal={subtotal} tax={200} shipping={800} />
          </div>
        </div>
      </div>
    </section>
  )
}

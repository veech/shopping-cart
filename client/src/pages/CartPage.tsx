import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { CartService } from '../services/CartService'
import { ItemService } from '../services/ItemService'

import { List, ListItem } from '../components/list'
import { SummaryCard } from '../components/cart/SummaryCard'

import { makeLineItems } from '../utils/helpers'
import { LineItem } from '../utils/types'

interface Props {}

const fetchData = () => {
  return Promise.all([ItemService.getAll(), CartService.getAll()])
}

export const CartPage: React.FC<Props> = () => {
  const [lineItems, setLineItems] = useState<Array<LineItem> | null>(null)

  useEffect(() => {
    fetchData().then(([itemList, cartItemList]) => {
      const joinedItems = makeLineItems(itemList, cartItemList)
      setLineItems(joinedItems)
    })
  }, [])

  const updateLineItemQuantity = (itemId: string, quantity: number) => {
    if (!lineItems) return

    const updatedLineItems = lineItems.map(item => (item.id === itemId ? { ...item, quantity } : item))

    setLineItems(updatedLineItems)
  }

  const removeLineItem = (itemId: string) => {
    if (!lineItems) return

    const updatedLineItems = lineItems.filter(lineItem => lineItem.id !== itemId)

    setLineItems(updatedLineItems)
  }

  const handleQuanitySubmit = async (data: { item: string; name: string; quantity: number }) => {
    const { item, name, quantity } = data

    try {
      const updatedCartItem = await CartService.updateItemQuantity(item, quantity)

      // Situation where quantity was set to 0
      if (!updatedCartItem) {
        removeLineItem(item)
        toast.info(`'${name}' removed from cart`)
        return
      }

      updateLineItemQuantity(updatedCartItem.item, updatedCartItem.quantity)

      toast.info(`Set '${name}' quantity to ${updatedCartItem.quantity}`)
    } catch (error) {
      toast.error(`Error setting '${name}' quantity to ${quantity}`)
      console.log(error)
    }
  }

  const handleDelete = async (data: { item: string; name: string }) => {
    const { item, name } = data

    if (!lineItems) return

    try {
      await CartService.deleteItem(item)

      removeLineItem(item)

      toast.info(`'${name}' removed from cart`)
    } catch (error) {
      toast.error(`Error removing '${name}' from cart`)
      console.log(error)
    }
  }

  const subtotal = lineItems?.reduce((sum, lineItem) => sum + lineItem.price * lineItem.quantity, 0) || 0

  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-3">Cart</h3>
        {lineItems ? <h5 className="subtitle is-5">{lineItems?.length} items</h5> : null}

        <div className="columns">
          <div className="column is-half">
            <List>
              {lineItems?.map(lineItem => (
                <ListItem
                  {...lineItem}
                  key={lineItem.id}
                  onQuantitySubmit={handleQuanitySubmit}
                  onDelete={handleDelete}
                />
              ))}
            </List>
          </div>

          <div className="column">
            {lineItems && lineItems.length > 0 ? <SummaryCard subtotal={subtotal} tax={200} shipping={800} /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

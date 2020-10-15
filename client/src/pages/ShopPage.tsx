import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { GridList, GridItem } from '../components/GridList'

import { ItemService } from '../services/ItemService'
import { CartService } from '../services/CartService'

import { Item } from '../utils/types'

interface Props {}

const handleQuanitySubmit = async (data: { item: string; name: string; quantity: number }) => {
  const { name, ...cartItem } = data

  try {
    await CartService.addItem(cartItem)

    toast.info(`Added ${cartItem.quantity} '${name}' to cart`)
  } catch (error) {
    toast.error(`Error adding ${cartItem.quantity} '${name}' to cart`)
  }
}

export const ShopPage: React.FC<Props> = () => {
  const [items, setItems] = useState<Array<Item> | null>(null)

  useEffect(() => {
    ItemService.getAll().then(items => setItems(items))
  }, [])

  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-3">Shop</h3>
        {items ? <h5 className="subtitle is-5">{items?.length} items</h5> : null}

        <GridList>
          {items?.map(item => (
            <GridItem {...item} key={item.id} onQuantitySubmit={handleQuanitySubmit} />
          ))}
        </GridList>
      </div>
    </section>
  )
}

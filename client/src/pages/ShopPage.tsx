import React, { useEffect, useState } from 'react'

import { Loader } from '../components/common/Loader'
import { Card } from '../components/Card'

import { ItemService } from '../services/ItemService'

import { Item } from '../utils/types'

interface Props {}

const renderItems = (items: Array<Item> | null) => {
  if (!items) return <Loader />

  const cards = items.map(item => (
    <div key={item.id} className="column is-one-third">
      <Card id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} />
    </div>
  ))

  return <div className="columns is-multiline">{cards}</div>
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

        {renderItems(items)}
      </div>
    </section>
  )
}

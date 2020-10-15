import React, { useEffect, useState } from 'react'

import { Loader } from '../components/common/Loader'
import { GridList, GridItem } from '../components/GridList'

import { ItemService } from '../services/ItemService'

import { Item } from '../utils/types'

interface Props {}

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
            <GridItem id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} />
          ))}
        </GridList>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { Loader } from './common/Loader'
import { QuantityForm } from './form/QuantityForm'

import { CartService } from '../services/CartService'

import { formatPrice } from '../utils/helpers'

import './GridList.css'

interface Props {
  id: string
  name: string
  description: string
  img: string
  price: number
}

export const GridItem: React.FC<Props> = props => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleAddToCart = async (quantity: number) => {
    const cartItem = { item: props.id, quantity }

    try {
      setLoading(true)
      await CartService.addItem(cartItem)
      setLoading(false)

      toast.info(`Added ${quantity} '${props.name}' to cart`)
    } catch (error) {
      toast.error(`Error adding ${quantity} '${props.name}' to cart`)
    }
  }

  return (
    <div className="column is-one-third">
      <div className="card grid-item">
        <div className="card-image">
          <div className="image-container" style={{ backgroundImage: `url(${props.img})` }}></div>
        </div>

        <div className="card-content">
          <div className="content">
            <h5>{props.name}</h5>
            <p>{formatPrice(props.price)}</p>
            <p>{props.description}</p>
          </div>

          <QuantityForm onSubmit={handleAddToCart} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export const GridList: React.FC<{}> = props => {
  if (!props.children) return <Loader />

  return <div className="columns is-multiline">{props.children}</div>
}

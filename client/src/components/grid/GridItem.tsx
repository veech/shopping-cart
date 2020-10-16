import React from 'react'

import { QuantityForm } from '../form/QuantityForm'

import { formatPrice } from '../../utils/helpers'

import './GridItem.css'

interface Props {
  id: string
  name: string
  description: string
  img: string
  price: number

  onQuantitySubmit?: (data: { item: string; name: string; quantity: number }) => void
}

export const GridItem: React.FC<Props> = props => {
  const handleSubmit = async (quantity: number) => {
    if (!props.onQuantitySubmit) return

    const cartItem = { item: props.id, name: props.name, quantity }

    await props.onQuantitySubmit(cartItem)
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

          <QuantityForm icon="plus" onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

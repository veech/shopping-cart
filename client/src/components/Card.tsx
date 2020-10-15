import React from 'react'

import { QuantityForm } from './form/QuantityForm'

import './Card.css'

interface Props {
  name: string
  description: string
  img: string
  price: number
}

export const Card: React.FC<Props> = props => {
  const onQuantitySubmit = (quantity: number) => {
    console.log(quantity)
  }

  return (
    <div className="card">
      <div className="card-image">
        <div className="image-container" style={{ backgroundImage: `url(${props.img})` }}></div>
      </div>

      <div className="card-content">
        <div className="content">
          <h5>{props.name}</h5>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>

        <QuantityForm onSubmit={onQuantitySubmit} />
      </div>
    </div>
  )
}

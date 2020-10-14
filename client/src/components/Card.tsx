import React, { useState } from 'react'

import './Card.css'

interface Props {
  name: string
  description: string
  img: string
  price: number
}

export const Card: React.FC<Props> = props => {
  const [quantity, setQuantity] = useState<string>('')

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const quantityNum = parseInt(quantity)

    if (isNaN(quantityNum)) return

    console.log(quantityNum)
    setQuantity('')
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h5>{props.name}</h5>
          {props.description}
        </div>

        <form onSubmit={formSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>

            <div className="control">
              <button className="button is-info is-outlined">
                <span className="icon">
                  <i className="fas fa-plus"></i>
                </span>
                <strong>Cart</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

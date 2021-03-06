import React from 'react'

import { QuantityForm, Button } from '../form'

import { formatPrice } from '../../utils/helpers'

import './ListItem.css'

interface Props {
  id: string
  name: string
  description: string
  img: string
  price: number
  quantity: number

  onQuantitySubmit?: (item: { item: string; name: string; quantity: number }) => void
  onDelete?: (data: { item: string; name: string }) => void
}

export const ListItem: React.FC<Props> = props => {
  const handleSubmit = async (quantity: number) => {
    if (!props.onQuantitySubmit) return

    const cartItem = { item: props.id, name: props.name, quantity }

    await props.onQuantitySubmit(cartItem)
  }

  const handleClick = async () => {
    if (!props.onDelete) return

    const cartItem = { item: props.id, name: props.name }

    await props.onDelete(cartItem)
  }

  return (
    <div className="block">
      <div className="card">
        <div className="card-content">
          <div className="level is-mobile">
            <div className="level-left">
              <h4 className="title is-4 level-item">{props.name}</h4>
            </div>
            <div className="level-right">
              <p className="level-item">
                {props.quantity} x {formatPrice(props.price)}&nbsp;&nbsp;&nbsp;
                <strong className="has-text-info">{formatPrice(props.price * props.quantity)}</strong>
              </p>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column is-narrow">
              <div className="list-item-image" style={{ backgroundImage: `url(${props.img})` }}></div>
            </div>
            <div className="column">
              <div className="content">{props.description}</div>
            </div>
          </div>
        </div>

        <footer className="card-footer">
          <div className="card-footer-item">
            <QuantityForm icon="redo" onSubmit={handleSubmit} defaultValue={props.quantity.toString()} keepOnSubmit />
          </div>
          <div className="card-footer-item">
            <Button className="is-danger is-outlined" onClick={handleClick}>
              <strong>Remove</strong>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

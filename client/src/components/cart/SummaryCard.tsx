import React from 'react'

import { formatPrice } from '../../utils/helpers'

import './SummaryCard.css'

interface Props {
  subtotal: number
  tax: number
  shipping: number
}

const CostItem: React.FC<{ label: string; value: number }> = props => (
  <div className="level is-mobile is-marginless">
    <div className="level-left">
      <p className="level-item">{props.label}</p>
    </div>
    <div className="level-right">
      <strong className="level-item">{formatPrice(props.value)}</strong>
    </div>
  </div>
)

export const SummaryCard: React.FC<Props> = props => {
  const { subtotal, tax, shipping } = props

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Summary</p>
      </header>
      <div className="card-content">
        <CostItem label="Subtotal" value={subtotal} />
        <CostItem label="Estimated Tax" value={tax} />
        <CostItem label="Estimated Shipping" value={shipping} />

        <hr />

        <CostItem label="Total" value={subtotal + tax + shipping} />
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button className="button is-success is-outlined">
            <strong>Checkout</strong>
          </button>
        </div>
      </footer>
    </div>
  )
}

import React, { useState } from 'react'

interface Props {
  onSubmit?: (quantity: number) => void
}

export const QuantityForm: React.FC<Props> = props => {
  const [quantity, setQuantity] = useState<string>('')

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const quantityNum = parseInt(quantity)

    if (isNaN(quantityNum)) return

    if (props.onSubmit) {
      props.onSubmit(quantityNum)
    }

    setQuantity('')
  }

  return (
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
  )
}

import React, { useState } from 'react'

interface Props {
  placeholder?: string
  icon: string
  defaultValue?: string

  onSubmit?: (quantity: number) => void
}

export const QuantityForm: React.FC<Props> = props => {
  const [quantity, setQuantity] = useState<string>(props.defaultValue || '')
  const [loading, setLoading] = useState<boolean>(false)

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const quantityNum = parseInt(quantity)

    if (isNaN(quantityNum)) return

    if (props.onSubmit) {
      setLoading(true)
      await props.onSubmit(quantityNum)
      setLoading(false)
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
          <button className={`button is-info is-outlined${loading ? ' is-loading' : ''}`}>
            <span className="icon">
              <i className={`fas fa-${props.icon}`}></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}

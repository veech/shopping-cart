import React, { useState } from 'react'

import './Button.css'

interface Props {
  className?: string

  onClick?: () => void
}

export const Button: React.FC<Props> = props => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = async () => {
    if (!props.onClick) return

    setLoading(true)
    await props.onClick()
  }

  return (
    <button
      className={`button${props.className ? ` ${props.className}` : ''}${loading ? ' is-loading' : ''}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}

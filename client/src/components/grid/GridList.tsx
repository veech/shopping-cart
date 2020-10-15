import React from 'react'

import { Loader } from '../common/Loader'

import './GridList.css'

interface Props {}

export const GridList: React.FC<Props> = props => {
  if (!props.children) return <Loader />

  return <div className="columns is-multiline">{props.children}</div>
}

import React from 'react'

import { Loader } from '../../components/common/Loader'

interface Props {}

export const List: React.FC<Props> = props => {
  if (!props.children) return <Loader />

  return <div>{props.children}</div>
}

import React from 'react'

import './Loader.css'

interface Props {}

export const Loader: React.FC<Props> = () => (
  <section className="section">
    <div className="container">
      <div className="loader page-loader"></div>
    </div>
  </section>
)

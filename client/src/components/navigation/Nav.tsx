import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

interface Props {}

export const Nav: React.FC<Props> = () => (
  <div className="nav">
    <div className="container">
      <div className="level is-mobile">
        <div className="level-left">
          <NavLink className="level-item has-text-grey-dark" to="/">
            <strong>Shop</strong>
          </NavLink>
        </div>

        <div className="level-right">
          <div className="level-item">
            <NavLink className="button is-primary" to="/cart">
              <span className="icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <strong>Checkout</strong>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
)

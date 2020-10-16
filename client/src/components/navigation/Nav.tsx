import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

interface Props {}

export const Nav: React.FC<Props> = () => (
  <div className="nav">
    <div className="container">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item pr-4">
            <h3 className="is-size-3 has-weight-bold">FUDE</h3>
          </div>

          <NavLink className="level-item navlink" to="/shop" activeClassName="is-active">
            <strong>Shop</strong>
          </NavLink>

          <NavLink className="level-item navlink" to="/shop">
            <strong>About us</strong>
          </NavLink>
        </div>

        <div className="level-right">
          <div className="level-item">
            <NavLink className="navlink" to="/cart" activeClassName="is-active">
              <span className="icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
)

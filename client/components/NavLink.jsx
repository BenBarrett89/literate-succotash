import React from 'react'
import { Link } from 'react-router'

class NavLink extends React.Component {
  render () {
    return (
      <li class='nav-item'>
        <Link {...this.props} />
      </li>
    )
  }
}

export default NavLink

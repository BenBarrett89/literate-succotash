import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

require('../sass/components/nav-bar.scss')

export default React.createClass({
  render: function () {
    return (
      <Nav bsStyle='tabs' className='nav-bar'>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/domain'>Domain</NavItem>
      </Nav>
    )
  }
})

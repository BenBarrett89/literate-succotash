import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import NavLink from './NavLink.jsx'

export default React.createClass({
  render: function () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Literate Succotash</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavLink to='/domain'>Domain</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

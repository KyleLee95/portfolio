import React from 'react'
import {
  Navbar as Nav,
  Button,
  Row,
  Col,
  NavDropdown,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const MobileNavBar = props => {
  return (
    <Nav
      style={{
        backgroundColor: '#24292e',
        justifyContent: 'center',
        boxShadow: '1px 1px 1px grey',
        fontFamily: 'serif'
      }}
    >
      <DropdownButton
        title="Menu"
        variant="outline-light"
        style={{color: 'white'}}
      >
        <Dropdown.Item eventKey="4.1">
          {' '}
          {/* <Link style={{color: 'white'}} to="/home"> */}
          home
          {/* </Link> */}
        </Dropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </DropdownButton>
    </Nav>
  )
}

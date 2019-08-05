import React from 'react'
import {Navbar as Nav, Button, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <Nav
      style={{
        backgroundColor: '#24292e',
        justifyContent: 'center',
        boxShadow: '1px 1px 1px grey',
        fontFamily: 'serif'
      }}
    >
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Row style={{justifyContent: 'space-evenly'}}>
            {/* <Col xs={2}> */}
            <Link style={{color: 'white'}} to="/mood">
              <Button variant="outline-light">mood</Button>
            </Link>

            {/* The navbar will show these links before you log in */}
            <Link style={{color: 'white'}} to="/about">
              <Button variant="outline-light">about</Button>
            </Link>

            <Link style={{color: 'white'}} to="/programming">
              <Button variant="outline-light">programming</Button>
            </Link>

            <Link style={{color: 'white'}} to="/connect">
              <Button variant="outline-light">connect</Button>
            </Link>

            <Link to="/thoughts" style={{color: 'white'}}>
              <Button variant="outline-light">thoughts</Button>
            </Link>
          </Row>
        </div>
      )}
    </Nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

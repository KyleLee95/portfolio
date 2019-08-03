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
        boxShadow: '1px 1px 1px grey'
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
          <Row>
            <Col>
              {/* The navbar will show these links before you log in */}
              <Link style={{color: 'white'}} to="/about">
                <Button variant="outline-light">About</Button>
              </Link>
            </Col>
            <Col>
              <Link style={{color: 'white'}} to="/projects">
                <Button variant="outline-light">Projects</Button>
              </Link>
            </Col>
            <Col>
              <Link style={{color: 'white'}} to="/connect">
                <Button variant="outline-light">Connect</Button>
              </Link>
            </Col>
            <Col>
              <a href="/KyleLeeResume.pdf" download="KyleLeeResume.pdf">
                <Button variant="outline-light">Resume</Button>
              </a>
            </Col>
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

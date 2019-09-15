import React, {Component} from 'react'
import {Navbar, Nav, Button, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {MobileNavBar} from '.'

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true
    }
    this.isMobileDevice = this.isMobileDevice.bind(this)
  }

  componentDidMount() {
    this.isMobileDevice()
  }

  isMobileDevice() {
    const isMobile =
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    this.setState({
      isMobile: isMobile
    })
  }
  render() {
    //If user is on a desktop/laptop

    if (this.props.isLoggedIn) {
      return (
        // <div>
        <Navbar
          style={{
            backgroundColor: '#24292e',
            justifyContent: 'center',
            boxShadow: '1px 1px 1px grey',
            fontFamily: 'serif'
          }}
          collapseOnSelect
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{justifyContent: 'center'}}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{justifyContent: 'center'}}
          >
            <Nav
              // className="mr-auto myNavLink"
              style={{justifyContent: 'center'}}
            >
              {/* <div style={{justifyContent: 'center'}}> */}
              {/* The navbar will show these links after you log in */}
              {/* <Row style={{justifyContent: 'center'}}> */}
              {/* <Col xs={2}> */}
              <Link style={{color: 'white'}} to="/home">
                <Button variant="outline-light">home</Button>
              </Link>
              <Link style={{color: 'white'}} to="/mood">
                <Button variant="outline-light">mood</Button>
              </Link>

              {/* The navbar will show these links before you log in */}

              <Link style={{color: 'white'}} to="/programming">
                <Button variant="outline-light">programming</Button>
              </Link>

              <Link to="/thoughts" style={{color: 'white'}}>
                <Button variant="outline-light">thoughts</Button>
              </Link>
              <Link style={{color: 'white'}} to="/info">
                <Button variant="outline-light">info</Button>
              </Link>

              <a href="#" onClick={this.props.handleClick}>
                <Button variant="outline-light"> logout</Button>
              </a>
            </Nav>
            {/* </Row> */}
            {/* </div> */}
          </Navbar.Collapse>
        </Navbar>
      )
    } else {
      //not logged in
      return (
        // <div>
        <Navbar
          style={{
            backgroundColor: '#24292e',
            alignContent: 'center',
            boxShadow: '1px 1px 1px grey',
            fontFamily: 'serif'
          }}
          collapseOnSelect
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{justifyContent: 'center'}}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{justifyContent: 'center'}}
          >
            <Nav
              style={{justifyContent: 'center'}}
              // className="mr-auto myNavLink"
            >
              {/* <div style={{justifyContent: 'center'}}> */}
              {/* <Row style={{justifyContent: 'center'}}> */}
              {/* <Col xs={2}> */}
              <Link style={{color: 'white'}} to="/home">
                <Button variant="outline-light">home</Button>
              </Link>
              <Link style={{color: 'white'}} to="/mood">
                <Button variant="outline-light">mood</Button>
              </Link>

              {/* The navbar will show these links before you log in */}

              <Link style={{color: 'white'}} to="/programming">
                <Button variant="outline-light">programming</Button>
              </Link>

              <Link to="/thoughts" style={{color: 'white'}}>
                <Button variant="outline-light">thoughts</Button>
              </Link>
              <Link style={{color: 'white'}} to="/info">
                <Button variant="outline-light">info</Button>
              </Link>
              {/* <Col xs={2}> */}
              {/* </Row> */}
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        // </div>
      )
    }
  }
}

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <Nav
//       style={{
//         backgroundColor: '#24292e',
//         justifyContent: 'center',
//         boxShadow: '1px 1px 1px grey',
//         fontFamily: 'serif'
//       }}
//     >
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Row style={{justifyContent: 'space-evenly'}}>
//             {/* <Col xs={2}> */}
//             <Link style={{color: 'white'}} to="/home">
//               <Button variant="outline-light">home</Button>
//             </Link>
//             <Link style={{color: 'white'}} to="/mood">
//               <Button variant="outline-light">mood</Button>
//             </Link>

//             {/* The navbar will show these links before you log in */}

//             <Link style={{color: 'white'}} to="/programming">
//               <Button variant="outline-light">programming</Button>
//             </Link>

//             <Link to="/thoughts" style={{color: 'white'}}>
//               <Button variant="outline-light">thoughts</Button>
//             </Link>
//             <Link style={{color: 'white'}} to="/info">
//               <Button variant="outline-light">info</Button>
//             </Link>

//             <a href="#" onClick={handleClick}>
//               <Button variant="outline-light"> logout</Button>
//             </a>
//           </Row>
//         </div>
//       ) : (
//         <div>
//           <Row style={{justifyContent: 'space-evenly'}}>
//             {/* <Col xs={2}> */}
//             <Link style={{color: 'white'}} to="/home">
//               <Button variant="outline-light">home</Button>
//             </Link>
//             <Link style={{color: 'white'}} to="/mood">
//               <Button variant="outline-light">mood</Button>
//             </Link>

//             {/* The navbar will show these links before you log in */}

//             <Link style={{color: 'white'}} to="/programming">
//               <Button variant="outline-light">programming</Button>
//             </Link>

//             <Link to="/thoughts" style={{color: 'white'}}>
//               <Button variant="outline-light">thoughts</Button>
//             </Link>
//             <Link style={{color: 'white'}} to="/info">
//               <Button variant="outline-light">info</Button>
//             </Link>
//           </Row>
//         </div>
//       )}
//     </Nav>
//   </div>
// )

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

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

import React, {Component} from 'react'
import {Navbar as Nav, Button, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Nav
            style={{
              backgroundColor: '#24292e',
              justifyContent: 'center',
              boxShadow: '1px 1px 1px grey',
              fontFamily: 'serif'
            }}
          >
            <div>
              {/* The navbar will show these links after you log in */}
              <Row style={{justifyContent: 'space-evenly'}}>
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
              </Row>
            </div>
          </Nav>
        </div>
      )
    } else {
      return (
        <div>
          <Nav
            style={{
              backgroundColor: '#24292e',
              justifyContent: 'center',
              boxShadow: '1px 1px 1px grey',
              fontFamily: 'serif'
            }}
          >
            <div>
              <Row style={{justifyContent: 'space-evenly'}}>
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
              </Row>
            </div>
            )
          </Nav>
        </div>
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

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

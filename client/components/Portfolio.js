import React, {Component} from 'react'
import {Row, Col, Spinner, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PortfolioItem} from './PortfolioItem'
import axios from 'axios'
class Portfolio extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    const projects = await axios.get('/api/projects/')
    this.setState({
      projects: projects.data
    })
  }

  render() {
    if (this.state.projects === undefined) {
      return (
        <div className="container-fluid">
          <Row>
            <br />
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <Spinner animation="grow" />
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#F9F9F9',
            textAlign: 'center',
            fontFamily: 'serif'
          }}
        >
          {/* About Me */}

          <Row id="landing" style={{height: '100vh', display: 'inline-block'}}>
            <Col style={{textAlign: 'center', paddingTop: '35%'}}>
              <h1>Kyle Lee</h1>
              <h4>
                {' '}
                <Link style={{color: 'black'}} to="/mood">
                  mood{' '}
                </Link>{' '}
                |
                <Link style={{color: 'black'}} to="/programming">
                  {' '}
                  programming{' '}
                </Link>{' '}
                |{' '}
                <Link style={{color: 'black'}} to="/thoughts">
                  thoughts
                </Link>
              </h4>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {}
}
export const ConnectedPortfolio = connect(mapState, mapDispatch)(Portfolio)

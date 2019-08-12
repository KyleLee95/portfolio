import React, {Component} from 'react'
import {Row, Col, Spinner, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PortfolioItem} from './PortfolioItem'
import axios from 'axios'
class Programming extends Component {
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
    if (this.state.projects[0] === undefined) {
      return (
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#F9F9F9',
            textAlign: 'center',
            fontFamily: 'serif',
            height: '100%'
          }}
        >
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
          <br />
          <h1>Programming</h1>
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              {this.state.projects.map(project => {
                return (
                  <React.Fragment key={project.id}>
                    {' '}
                    <br />
                    <PortfolioItem user={this.props.user} project={project} />
                  </React.Fragment>
                )
              })}
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
export const ConnectedProgramming = connect(mapState, mapDispatch)(Programming)

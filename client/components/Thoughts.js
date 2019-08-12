import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row, Col, Spinner} from 'react-bootstrap'

class Thoughts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thoughts: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/thoughts')
    this.setState({
      thoughts: res.data
    })
  }

  render() {
    if (this.state.thoughts[0] === undefined) {
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
            textAlign: 'center',
            fontFamily: 'serif',
            backgroundColor: '#F9F9F9',
            height: '100vh'
          }}
        >
          <div style={{display: 'inline-block'}}>
            <br />
            <h1>Thoughts</h1>
            <br />
            <Row>
              <Col xs={12}>
                <ul>
                  {this.state.thoughts.map(thought => {
                    return (
                      <React.Fragment key={thought.id}>
                        <br />
                        <li>
                          <Link to={`/thought/${thought.id}`}>
                            {thought.title}
                          </Link>
                        </li>
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export const ConnectedThoughts = connect(mapState, mapDispatch)(Thoughts)

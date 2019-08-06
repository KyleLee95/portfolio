import React, {Component} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
/**
 * COMPONENT
 */
export class SingleThought extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thought: {}
    }
  }

  async componentDidMount() {
    const res = await axios.get(`/api/thoughts/${this.props.match.params.id}`)
    this.setState({
      thought: res.data
    })
  }
  render() {
    const {thought} = this.state
    if (this.state.thought.id === undefined) return null
    return (
      <div className="container-fluid">
        <div style={{textAlign: 'center'}}>
          <div style={{display: 'inline-block'}}>
            <Row>
              <Col xs={5}>
                <h1>{thought.title}</h1>
                <p>{thought.content}</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

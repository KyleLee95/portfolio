import React, {Component} from 'react'
import axios from 'axios'

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
    if (thought.id === undefined) return null
    return (
      <div className="container-fluid" style={{fontFamily: 'serif'}}>
        <div style={{textAlign: 'center'}}>
          <br />
          <h1>{thought.title}</h1>
          <div>
            <div
              style={{
                display: 'inline-block',
                maxWidth: '70ch',
                textAlign: 'left'
              }}
              dangerouslySetInnerHTML={{__html: thought.content}}
            />
          </div>
        </div>
      </div>
    )
  }
}

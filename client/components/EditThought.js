import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {ThoughtForm} from '.'

export class EditThought extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      thought: {},
      quill: ''
    }
    this.handleQuill = this.handleQuill.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const thought = await axios.get(
      `/api/thoughts/${this.props.match.params.id}`
    )
    this.setState({
      thought: thought.data
    })
  }

  handleQuill(value) {
    this.setState({
      quill: value
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.put(`/api/thoughts/edit/${this.props.match.params.id}`, {
      title: this.state.title,
      content: this.state.quill
    })
    this.props.history.push('/manager')
  }

  render() {
    if (this.state.thought.id === undefined) return null
    return (
      <Row>
        <Col className="text-center" xs={12} lg={{offset: 3, span: 6}}>
          <ThoughtForm
            thought={this.state.thought}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleQuill={this.handleQuill}
          />
        </Col>
      </Row>
    )
  }
}

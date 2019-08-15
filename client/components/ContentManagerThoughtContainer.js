import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {ThoughtForm} from '.'
import axios from 'axios'
import {Link} from 'react-router-dom'
export class ContentManagerThoughtContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      quill: '',
      thoughts: [],
      thought: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.handleQuill = this.handleQuill.bind(this)
  }

  async componentDidMount() {
    const thoughts = await axios.get('/api/thoughts/')
    this.setState({
      thoughts: thoughts.data
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    await axios.post('/api/thoughts', {
      title: this.state.title,
      content: this.state.quill
    })
    const thoughts = await axios.get('/api/thoughts')
    this.setState({
      thoughts: thoughts.data
    })
  }

  handleQuill(value) {
    this.setState({
      quill: value
    })
  }

  async delete(project) {
    const projects = await axios.delete(`/api/projects/${project.id}`)
    this.setState({
      projects: projects.data
    })
  }

  render() {
    if (this.state.thoughts[0] === undefined)
      return (
        <Row>
          <Col
            className="text-center"
            style={{padding: 10}}
            xs={12}
            lg={{offset: 3, span: 6}}
          >
            <h1>Thought Form</h1>
            <ThoughtForm
              thought={this.state.thought}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleQuill={this.handleQuill}
            />
          </Col>
        </Row>
      )
    return (
      <div
        className="container-fluid"
        style={{padding: 10, fontFamily: 'serif'}}
      >
        <div className="text-center">
          <Row>
            <Col style={{padding: 10}} xs={12} lg={{offset: 3, span: 6}}>
              <h1>Thought Form</h1>
              <ThoughtForm
                thought={this.state.thought}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleQuill={this.handleQuill}
              />
            </Col>
          </Row>
          <hr />
          {/* Displays the projects */}
          <Row>
            <Col
              style={{padding: 10, display: 'inline-block'}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <ul>
                {this.state.thoughts
                  .sort((a, b) => {
                    return b.id - a.id
                  })
                  .map(thought => {
                    return (
                      <React.Fragment key={thought.id}>
                        <br />
                        <li>
                          <Link to={`/thought/${thought.id}`}>
                            {thought.title}
                          </Link>{' '}
                          <Link to={`/edit/thought/${thought.id}`}>
                            <Button variant="dark">Edit </Button>
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

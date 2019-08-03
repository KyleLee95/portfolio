import React, {Component} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PortfolioItem} from '.'
import axios from 'axios'
class ContentManager extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
  }

  async componentDidMount() {
    const projects = await axios.get('/api/projects/')
    this.setState({
      projects: projects.data
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.post('/api/projects', {
      title: this.state.title,
      description: this.state.description,
      gitHubLink: this.state.gitHubLink,
      deployLink: this.state.deployLink,
      image: this.state.image
    })
    const projects = await axios.get('/api/projects')

    this.setState({
      projects: projects.data
    })
  }

  async delete(project) {
    const projects = await axios.delete(`/api/projects/${project.id}`)
    this.setState({
      projects: projects.data
    })
  }

  render() {
    if (this.state.projects === undefined) {
      return null
    } else {
      return (
        <div className="container-fluid">
          {/* Displays the Form to create a new project */}
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              {/* New Project Form */}
              <Form onSubmit={this.handleSubmit}>
                <h1>New Project</h1>

                <Form.Row>
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      name="title"
                      placeholder="Title"
                    />
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      type="password"
                      name="description"
                      onChange={this.handleChange}
                      placeholder="Description"
                    />
                    <Form.Label>GitHubLink</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      name="gitHubLink"
                      placeholder="GitHubLink"
                    />
                    <Form.Label>DeployLink</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      name="deployLink"
                      placeholder="DeployLink"
                    />
                    <Form.Label>Image File name</Form.Label>
                    <Form.Control
                      onChange={this.handleChange}
                      name="image"
                      placeholder="image"
                    />
                  </Col>
                </Form.Row>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
          {/* Displays the projects */}
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              {this.state.projects
                .sort((a, b) => {
                  return b.id - a.id
                })
                .map(project => {
                  return (
                    <React.Fragment key={project.id}>
                      <br />
                      <PortfolioItem
                        user={this.props.user}
                        deleteProject={this.delete}
                        project={project}
                      />
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
export const ConnectedContentManager = connect(mapState, mapDispatch)(
  ContentManager
)

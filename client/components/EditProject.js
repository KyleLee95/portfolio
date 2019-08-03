import React, {Component} from 'react'
import {Row, Col, Button, Form, Spinner} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import history from 'history'
class EditProject extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      project: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    console.log(this.props)
    const project = await axios.get(
      `/api/projects/${Number(this.props.match.params.id)}`
    )

    this.setState({
      project: project.data
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    await axios.put(`/api/projects/edit/${this.props.match.params.id}`, {
      title: this.state.title,
      description: this.state.description,
      gitHubLink: this.state.gitHubLink,
      deployLink: this.state.deployLink,
      image: this.state.image
    })
    this.props.history.push('/manager')
  }

  render() {
    if (this.state.project.id === undefined) {
      return <Spinner />
    } else {
      return (
        <Row>
          <Col
            className="text-center"
            style={{padding: 10}}
            xs={12}
            lg={{offset: 3, span: 6}}
          >
            {/* New Project Form */}
            <Form onSubmit={this.handleSubmit}>
              <h1>Edit Project</h1>
              <Form.Row>
                <Col>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    name="title"
                    defaultValue={this.state.project.title}
                    placeholder="Title"
                  />
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="password"
                    name="description"
                    onChange={this.handleChange}
                    defaultValue={this.state.project.description}
                    placeholder="Description"
                  />
                  <Form.Label>GitHubLink</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    name="gitHubLink"
                    defaultValue={this.state.project.gitHubLink}
                    placeholder="GitHubLink"
                  />
                  <Form.Label>DeployLink</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    name="deployLink"
                    defaultValue={this.state.project.deployLink}
                    placeholder="DeployLink"
                  />
                  <Form.Label>Image File name</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    name="image"
                    defaultValue={this.state.project.image}
                    placeholder="image"
                  />
                </Col>
              </Form.Row>
              {/* <Link to="/manager"> */}
              <Button type="submit">Submit</Button>
              {/* </Link> */}
            </Form>
          </Col>
        </Row>
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

export const ConnectedEditProject = connect(mapState, mapDispatch)(EditProject)

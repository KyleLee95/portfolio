import React, {Component} from 'react'
import {Col, Button, Form} from 'react-bootstrap'

import ReactQuill from 'react-quill'

export class ProjectForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      project: {},
      quill: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* New Project Form

        receives handleChange, handleSubmit, and handleQuill from the container component.
        Works for edit form.

        */}
        <br />
        Description
        <ReactQuill
          name="quill"
          defaultValue={this.props.project.description}
          onChange={this.props.handleQuill}
        />
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="title"
                defaultValue={this.props.project.title}
                placeholder="Title"
              />
              <Form.Label>GitHubLink</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="gitHubLink"
                defaultValue={this.props.project.gitHubLink}
                placeholder="GitHubLink"
              />
              <Form.Label>DeployLink</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="deployLink"
                defaultValue={this.props.project.deployLink}
                placeholder="DeployLink"
              />
              <Form.Label>Image File name</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="image"
                defaultValue={this.props.project.image}
                placeholder="image"
              />
            </Col>
          </Form.Row>
          {/* <Link to="/manager"> */}
          <Button type="submit">Submit</Button>
          {/* </Link> */}
        </Form>
      </React.Fragment>
    )
  }
}

import React, {Component, Fragment} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import ReactQuill from 'react-quill'

export class ThoughtForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      thought: {},
      quill: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Thought Form

        receives handleChange, handleSubmit, and handleQuill from the container component.
        Works for edit form.

        */}
        <br />
        Content
        <ReactQuill
          name="quill"
          defaultValue={this.props.thought.content}
          onChange={this.props.handleQuill}
        />
        <Form
          style={{padding: 10, fontFamily: 'serif'}}
          onSubmit={this.props.handleSubmit}
        >
          <Form.Row>
            <Col>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="title"
                defaultValue={this.props.thought.title}
                placeholder="Title"
              />
            </Col>
          </Form.Row>
          {/* <Link to="/manager"> */}
          <Button variant="dark" type="submit">
            Submit
          </Button>
          {/* </Link> */}
        </Form>
      </React.Fragment>
    )
  }
}

import React, {Component} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import ReactQuill from 'react-quill'

export class MoodForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      mood: {},
      quill: ''
    }
  }

  render() {
    if (this.props.mood === undefined) return null
    return (
      <React.Fragment>
        {/* Mood Form

        receives handleChange, handleSubmit, and handleQuill from the container component.
        Works for edit form.

        */}
        <br />

        <Form
          style={{padding: 10, fontFamily: 'serif'}}
          onSubmit={this.props.handleSubmit}
        >
          <Form.Row>
            <Col>
              <Form.Label>url</Form.Label>
              <Form.Control
                onChange={this.props.handleChange}
                name="url"
                defaultValue={this.props.mood.url}
                placeholder="url"
              />
              <Form.Label>type</Form.Label>
              <Form.Control
                as="select"
                onChange={this.props.handleChange}
                name="type"
                defaultValue={this.props.mood.type}
              >
                <option>SELECT</option>
                <option>TEXT</option>
                <option>VIDEO</option>
                <option>IMAGE</option>
              </Form.Control>
              <br />
              <input id="image" type="file" name="image" />
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

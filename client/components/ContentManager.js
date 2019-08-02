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
  }

  async componentDidMount() {
    const projects = await axios.get('/api/projects/')
    this.setState({
      projects: projects.data
    })
  }

  handleChange() {}

  handleSubmit() {}
  render() {
    if (this.state.projects === undefined) {
      return null
    } else {
      return (
        <div className="container-fluid">
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" placeholder="Title" />
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      type="password"
                      name="description"
                      placeholder="Description"
                    />
                    <Form.Label>GitHubLink</Form.Label>
                    <Form.Control name="gitHubLink" placeholder="GitHubLink" />
                    <Form.Label>DeployLink</Form.Label>
                    <Form.Control name="deplyLink" placeholder="DeployLink" />
                    <Form.Label>Image File name</Form.Label>
                    <Form.Control name="image" placeholder="image" />
                  </Col>
                </Form.Row>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              {this.state.projects.map(project => {
                return (
                  <React.Fragment key={project.id}>
                    <br />
                    <PortfolioItem user={this.props.user} project={project} />
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

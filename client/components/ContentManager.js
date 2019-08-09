import React, {Component} from 'react'
import {Row, Col, Button, Form, Tabs, Tab} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PortfolioItem, ProjectForm} from '.'
import axios from 'axios'
import ReactQuill from 'react-quill'

class ContentManager extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      quill: '',
      project: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.handleQuill = this.handleQuill.bind(this)
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
      description: this.state.quill,
      gitHubLink: this.state.gitHubLink,
      deployLink: this.state.deployLink,
      image: this.state.image
    })
    const projects = await axios.get('/api/projects')
    this.setState({
      title: '',
      description: '',
      gitHubLink: '',
      deployLink: '',
      image: ''
    })
    this.setState({
      projects: projects.data
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
    if (this.state.projects === undefined) {
      return null
    } else {
      return (
        <div className="container-fluid">
          <Tabs defaultActiveKey="project">
            <Tab eventKey="project" title="project">
              {/* Displays the Form to create a new project */}
              <Row>
                <Col
                  className="text-center"
                  style={{padding: 10}}
                  xs={12}
                  lg={{offset: 3, span: 6}}
                >
                  <h1>Project Form</h1>
                  <ProjectForm
                    project={this.state.project}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleQuill={this.handleQuill}
                  />
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
            </Tab>
            <Tab eventKey="thoughts" title="thoughts">
              asdfmaisdfnoiasdnfiaosfns
            </Tab>
            <Tab eventKey="mood" title="mood">
              A
            </Tab>
          </Tabs>
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

import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {ProjectForm} from '.'

let quill = ''
class EditProject extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      project: {}
    }
    this.handleQuill = this.handleQuill.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    console.log(this.props)
    const project = await axios.get(
      `/api/projects/${this.props.match.params.id}`
    )

    this.setState({
      project: project.data
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
    var image = document.getElementById('file').files[0]
    // Check to see if image is undefined. If it is, then skip base64 encoding
    if (image !== undefined) {
      var reader = new FileReader()
      reader.readAsDataURL(image)
      const title = this.state.title
      const description = this.state.description
      const gitHubLink = this.state.gitHubLink
      const deployLink = this.state.deployLink
      const id = this.props.match.params.id
      // console.log(reader.result)
      reader.onload = async function() {
        await axios.put(`/api/projects/edit/${id}`, {
          title: title,
          description: description,
          gitHubLink: gitHubLink,
          deployLink: deployLink,
          image: reader.result
        })
      }
      reader.onerror = function(error) {
        console.log('Error: ', error)
      }
    } else {
      await axios.put(`/api/projects/edit/${this.props.match.params.id}`, {
        title: this.state.title,
        description: this.state.quill,
        gitHubLink: this.state.gitHubLink,
        deployLink: this.state.deployLink,
        image: null
      })
    }

    this.props.history.push('/manager')
  }

  render() {
    if (this.state.project.id === undefined) return null
    return (
      <Row>
        <Col
          className="text-center"
          style={{padding: 10}}
          xs={12}
          lg={{offset: 3, span: 6}}
        >
          {/* Project Form */}
          <ProjectForm
            handleChange={this.handleChange}
            handleQuill={this.handleQuill}
            handleSubmit={this.handleSubmit}
            project={this.state.project}
          />
        </Col>
      </Row>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export const ConnectedEditProject = connect(mapState, mapDispatch)(EditProject)

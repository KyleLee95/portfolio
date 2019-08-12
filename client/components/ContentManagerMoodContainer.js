import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import {MoodForm} from '.'
import axios from 'axios'

export class ContentManagerMoodContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      quill: '',
      moods: [],
      mood: {},
      b64Image: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.delete = this.delete.bind(this)
  }

  async componentDidMount() {
    const moods = await axios.get('/api/moods/')
    this.setState({
      moods: moods.data
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleImage() {
    let b64Image = ''
    var image = document.getElementById('file').files[0]
    var reader = new FileReader()
    reader.readAsDataURL(image)
    console.log(reader.result)
    reader.onload = function() {
      console.log(reader.result)
      b64Image = reader.result
    }
    reader.onerror = function(error) {
      console.log('Error: ', error)
    }
    this.setState({
      b64Image: b64Image
    })
    console.log(this.state)
  }

  async handleSubmit(e) {
    e.preventDefault()
    var image = document.getElementById('file').files[0]
    var reader = new FileReader()
    reader.readAsDataURL(image)
    const type = this.state.type
    const url = this.state.url
    // console.log(reader.result)
    reader.onload = async function() {
      await axios.post('/api/moods', {
        type: type,
        url: url,
        image: reader.result
      })
    }
    reader.onerror = function(error) {
      console.log('Error: ', error)
    }

    const moods = await axios.get('/api/moods')
    this.setState({
      moods: moods.data
    })
  }

  async delete(mood) {
    const moods = await axios.delete(`/api/moods/${mood.id}`)
    this.setState({
      moods: moods.data
    })
  }

  render() {
    if (this.state.moods[0] === undefined) {
      return (
        <Row>
          <Col
            className="text-center"
            style={{padding: 10}}
            xs={12}
            lg={{offset: 3, span: 6}}
          >
            <h1>Mood Form</h1>
            <MoodForm
              mood={this.state.mood}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleQuill={this.handleQuill}
            />
          </Col>
        </Row>
      )
    }
    return (
      <div className="container-fluid" style={{fontFamily: 'serif'}}>
        <Row>
          <Col
            className="text-center"
            style={{padding: 10}}
            xs={12}
            lg={{offset: 3, span: 6}}
          >
            <h1>Mood Form</h1>
            <MoodForm
              mood={this.state.mood}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleQuill={this.handleQuill}
              handleImage={this.handleImage}
            />
          </Col>
        </Row>
        <hr />
        {/* Displays the moods */}
        <Row>
          <Col
            className="text-center"
            style={{padding: 10}}
            xs={12}
            lg={{offset: 3, span: 6}}
          >
            {this.state.moods
              .sort((a, b) => {
                return b.id - a.id
              })
              .map(mood => {
                if (mood.type === 'IMAGE') {
                  var arrayBufferView = new Uint8Array(mood.image)
                  var blob = new Blob([arrayBufferView], {type: 'image/png'})
                  var urlCreator = window.URL || window.webkitURL
                  var imageUrl = urlCreator.createObjectURL(blob)

                  // console.log(img)
                  return (
                    <React.Fragment key={mood.id}>
                      <br />
                      image
                      <Image src={`${imageUrl}`} />
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment key={mood.id}>
                      <br />
                      video
                      {/* <PortfolioItem
                      user={this.props.user}
                      deleteProject={this.delete}
                      project={project}
                    /> */}
                    </React.Fragment>
                  )
                }
              })}
          </Col>
        </Row>
      </div>
    )
  }
}

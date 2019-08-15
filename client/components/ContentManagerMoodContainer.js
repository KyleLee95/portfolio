import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import {MoodForm, MoodItem} from '.'
import axios from 'axios'

export class ContentManagerMoodContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      quill: '',
      moods: [],
      mood: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.delete = this.delete.bind(this)
  }

  async componentDidMount() {
    const moods = await axios.get('/api/moods/offSet/0')
    this.setState({
      moods: moods.data
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
    }
    //for none images
    await axios.post('/api/moods', {
      type: this.state.type,
      url: this.state.url,
      image: null
    })

    const moods = await axios.get('/api/moods/offSet/0')
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
            {/* {this.state.moods
              .sort((a, b) => {
                return b.id - a.id
              })
              .map(mood => {
                return <MoodItem content={mood} key={mood.id} />
              })} */}
          </Col>
        </Row>
      </div>
    )
  }
}

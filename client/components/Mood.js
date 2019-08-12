import React, {Component} from 'react'
import {Spinner, Row, Col} from 'react-bootstrap'
import axios from 'axios'
export class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: []
    }
  }

  async componentDidMount() {
    const moods = await axios.get('/api/moods')
    this.setState({
      moods: moods.data
    })
  }
  render() {
    if (this.state.moods[0] === undefined) {
      return (
        <div
          className="container-fluid"
          style={{
            backgroundColor: '#F9F9F9',
            textAlign: 'center',
            fontFamily: 'serif',
            height: '100%'
          }}
        >
          <Row>
            <br />
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <Spinner animation="grow" />
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <div
          className="container-fluid"
          style={{fontFamily: 'serif', backgroundColor: '#F9F9F9'}}
        >
          <br />
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={{offset: 3, span: 6}}
              style={{
                textAlign: 'center',
                alignContent: 'center'
              }}
            >
              <h1>Mood</h1>
              {this.state.moods.map(content => {
                var image = new Image()
                image.src = content.image
                document.body.appendChild(image)
                // return <Image key={content.id} src={`${content.url}`} />
              })}
            </Col>
          </Row>
        </div>
      )
    }
  }
}

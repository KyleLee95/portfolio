import React, {Component} from 'react'
import {Spinner, Row, Col, Image as BsImage} from 'react-bootstrap'
import axios from 'axios'
import {MoodItem} from '.'

export class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: [],
      offSet: 0
    }

    this.loadMore = this.loadMore.bind(this)
  }

  async componentDidMount() {
    const moods = await axios.get('/api/moods/offSet/0')
    this.setState({
      moods: moods.data,
      offSet: moods.data.length
    })

    window.addEventListener('scroll', () => {
      const height = document.getElementById('scroller').clientHeight / 3

      if (Number(window.pageYOffset) >= Number(height)) {
        this.loadMore()
      }
    })
  }

  async loadMore() {
    let scrollMoods = await axios.get(`/api/moods/offSet/${this.state.offSet}`)
    let iterableMoods = []
    this.state.moods.forEach(mood => {
      iterableMoods.push(mood)
    })
    let allMoods = [...scrollMoods.data, ...iterableMoods]
    const uniqueMoods = Array.from(new Set(allMoods.map(a => a.id)))
      .map(id => {
        return allMoods.find(a => a.id === id)
      })
      .sort((a, b) => {
        return a.id - b.id
      })
    let newOffSet = Number(this.state.offSet) + Number(scrollMoods.data.length)

    this.setState({
      moods: uniqueMoods,
      offSet: newOffSet
    })
    console.log(this.state)
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
          id="scroller"
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
                return <MoodItem key={content.id} content={content} />
              })}
            </Col>
          </Row>
        </div>
      )
    }
  }
}

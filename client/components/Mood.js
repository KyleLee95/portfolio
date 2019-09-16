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
    let sortedMoods = moods.data.sort((a, b) => {
      return a.id - b.id
    })
    this.setState({
      moods: sortedMoods,
      offSet: moods.data.length
    })
    //Creates the event listener for scroll
    window.addEventListener('scroll', () => {
      // uses the container where elements (scroller) are being added
      // dividing by 4 was just a nice numnber that seems to work very well.
      const height = document.getElementById('scroller').clientHeight / 10
      if (Number(window.pageYOffset) >= Number(height)) {
        //calls loadMore which, suprise, loads more content

        this.loadMore()
      }
    })
  }
  //Used for infinite scrolling feed
  async loadMore() {
    let offset = this.state.offSet
    let scrollMoods = await axios.get(`/api/moods/offSet/${offset}`)

    let allMoods = [...scrollMoods.data, ...this.state.moods]
    //put all the moods in an array to and create an array from a set in order to double check
    //that there are no duplicates.
    const uniqueMoods = Array.from(new Set(allMoods.map(a => a.id))).map(id => {
      return allMoods.find(a => a.id === id)
    })
    //Sort them to put them in order
    let sorted = uniqueMoods.sort((a, b) => {
      return a.id - b.id
    })
    //set the newOffSet so that the back-end query knows where to begin its ID Range
    let newOffSet = Number(this.state.offSet) + Number(scrollMoods.data.length)

    this.setState({
      moods: sorted,
      offSet: newOffSet
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
          <Row style={{display: 'inline block'}}>
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
              <h1>mood</h1>
              {this.state.moods.map(content => {
                // Pass the conttent to moodItem and let it handle the rendering logic
                // Mood Item renders based on the type property
                return <MoodItem key={content.id} content={content} />
              })}
            </Col>
          </Row>
        </div>
      )
    }
  }
}

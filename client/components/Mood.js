import React, {Component} from 'react'
import {Spinner, Row, Col, Image} from 'react-bootstrap'
import axios from 'axios'
export class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/mood')
    this.setState({
      content: res.data
    })
  }
  render() {
    // if (this.state.content[0] === undefined) return null
    return (
      <div className="container-fluid" style={{fontFamily: 'serif'}}>
        <br />
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={{offset: 3, span: 6}}
            style={{textAlign: 'center', alignContent: 'center'}}
          >
            A
            {this.state.content.map(content => {
              return <Image key={content.id} src={`${content.url}`} />
            })}
          </Col>
        </Row>
      </div>
    )
  }
}

import React, {Component} from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ContentManager extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    return <div>Hello World Content Manager</div>
  }
}

const mapState = state => {}
const mapDispatch = dispatch => {}
export const ConnectedContentManager = connect(null, null)(ContentManager)

import React, {Component} from 'react'
import {Row, Col, Button, Form, Tabs, Tab} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  ContentManagerProjectContainer,
  ContentManagerThoughtContainer,
  ContentManagerMoodContainer
} from '.'
import axios from 'axios'

class ContentManager extends Component {
  render() {
    return (
      <div className="container-fluid" style={{fontFamily: 'serif'}}>
        <Tabs defaultActiveKey="project">
          <Tab eventKey="project" title="project">
            {/* Displays the Form to create a new project */}
            <ContentManagerProjectContainer />
          </Tab>
          <Tab eventKey="thoughts" title="thoughts">
            <ContentManagerThoughtContainer />
          </Tab>
          <Tab eventKey="mood" title="mood">
            <ContentManagerMoodContainer />
          </Tab>
        </Tabs>
      </div>
    )
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

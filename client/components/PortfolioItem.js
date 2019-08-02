import React, {Component} from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export const PortfolioItem = props => {
  const {project} = props
  return (
    <Card style={{boxShadow: '2px 2px 2px grey'}}>
      <Card.Img variant="top" src={project.image} alt="carouselImage" />
      <Card.Body>
        <Card.Text>{project.description}</Card.Text>
        <Row style={{justifyContent: 'space-evenly'}}>
          <a href={project.gitHubLink} target="_blank">
            <Button variant="dark">GitHub Repo</Button>
          </a>
          <a href={project.deployLink} target="_blank">
            <Button variant="dark">Deployed Project</Button>
          </a>
        </Row>
      </Card.Body>
    </Card>
  )
}

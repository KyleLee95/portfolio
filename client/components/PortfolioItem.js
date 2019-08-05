import React, {Component} from 'react'
import {Row, Col, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import history from 'history'
export const PortfolioItem = props => {
  const {project, user, deleteProject} = props
  return (
    <Card style={{boxShadow: '2px 2px 2px grey'}}>
      <Card.Img variant="top" src={project.image} alt="carouselImage" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Row style={{justifyContent: 'space-evenly'}}>
          <a href={project.gitHubLink} target="_blank">
            <Button variant="dark">GitHub Repo</Button>
          </a>
          <a href={project.deployLink} target="_blank">
            <Button variant="dark">Deployed Project</Button>
          </a>
          {user.id === undefined ? null : (
            <React.Fragment>
              <Link to={`/edit/project/${project.id}`}>
                <Button variant="dark">Edit</Button>
              </Link>

              <Button
                variant="dark"
                onClick={async () => {
                  await deleteProject(project)
                }}
              >
                Delete
              </Button>
            </React.Fragment>
          )}
        </Row>
      </Card.Body>
    </Card>
  )
}

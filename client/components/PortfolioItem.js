import React from 'react'
import {Row, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const PortfolioItem = props => {
  const {project, user, deleteProject} = props

  // Start reading the blob as text.
  return (
    <Card style={{boxShadow: '2px 2px 2px grey', fontFamily: 'serif'}}>
      <Card.Img variant="top" src={project.image} alt="carouselImage" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        {/*Due to the nature of how the HTML is set, if the description is null for even one instance it will break descriptions for everything*/}
        <Card.Title dangerouslySetInnerHTML={{__html: project.description}} />
        <Row style={{justifyContent: 'space-evenly'}}>
          <a href={project.gitHubLink} target="_blank">
            <Button variant="dark">GitHub Repo</Button>
          </a>
          <a href={project.deployLink} target="_blank">
            <Button variant="dark">Deployed Project</Button>
          </a>
          {user && user.id === undefined ? null : (
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

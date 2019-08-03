import React, {Component} from 'react'
import {Row, Col, Spinner, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PortfolioItem} from './PortfolioItem'
import axios from 'axios'
class Portfolio extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    const projects = await axios.get('/api/projects/')
    this.setState({
      projects: projects.data
    })
  }

  render() {
    if (this.state.projects === undefined) {
      return (
        <div className="container-fluid">
          <Row>
            <br />
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <Spinner animation="grow" />
              <br />
              Loading Content...
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <div className="container-fluid" style={{backgroundColor: '#F9F9F9'}}>
          {/* About Me */}
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <h2>About Me</h2>
              <Card style={{boxShadow: '2px 2px 2px grey'}}>
                <Card.Img src="profile.jpg" fluid="true" />
                <Card.Body>
                  The standard Lorem Ipsum passage, used since the 1500s "Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum." Section 1.10.32 of "de Finibus
                  Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure repre
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Portfolio Projects */}
          <hr />
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <h2>Projects</h2>
              {this.state.projects
                .sort((a, b) => {
                  return b.id - a.id
                })
                .map(project => {
                  return (
                    <React.Fragment key={project.id}>
                      <br />
                      <PortfolioItem user={this.props.user} project={project} />
                    </React.Fragment>
                  )
                })}
            </Col>
          </Row>
          {/* Resume && Social Media */}
          <hr />
          <Row>
            <Col
              className="text-center"
              style={{padding: 10}}
              xs={12}
              lg={{offset: 3, span: 6}}
            >
              <h2>Connect</h2>
            </Col>
          </Row>
        </div>
      )
    }
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
export const ConnectedPortfolio = connect(mapState, mapDispatch)(Portfolio)

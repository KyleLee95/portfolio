import React, {Component} from 'react'
import {Row, Col, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div
        className="container-fluid"
        style={{fontFamily: 'serif', backgroundColor: '#F9F9F9'}}
      >
        <Row style={{justifyContent: 'center', textAlign: 'center'}}>
          <Col xs={12} sm={12} md={12}>
            <br />
            <h1>Info</h1>
            <br />
            <Card style={{marginLeft: '25%', width: '50%'}}>
              <Card.Img variant="top" src="profile-1.jpg" />
              <Card.Body style={{textAlign: 'left'}}>
                <p>
                  {' '}
                  My name is Kyle Lee and I am a novice programmer and aspiring
                  startup founder. My journey into programming started after I
                  finished undergrad (University of Chicago ‘18, B.A. Art
                  History). After interning at a small retail luxury streetwear
                  and designer clothing store called{' '}
                  <a href="https://www.notre-shop.com/" target="_blank">
                    Notre
                  </a>{' '}
                  for about 3 years, I knew that I was interested in start ups
                  and business but wasn’t sure if working in the fashion
                  industry would be correct for me.
                </p>
                <p>
                  At the encouragement of some friends, I decided to give
                  programming a try. After finishing CodeCademy’s basic Web
                  Development track and deciding that I “didn’t hate
                  programming” I applied to a coding bootcamp called Fullstack
                  Academy. After completing the bootcamp in April 2019 program,
                  I have found that not only do I “not hate” programming but in
                  fact enjoy it quite a bit.
                </p>
                <p>
                  While programming is no longer a part of my daily routine
                  while I work at my family's business, I am still working on
                  small side projects that (I hope) can solve some inefficiency
                  and to help me grow as a programmer. Outside of programming
                  and startups, I enjoy practicing film photography with my
                  Nikon F3, keeping up with the latest in fashion, and trying to
                  learn the math required for basic Machine Learning.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col
            className="text-center"
            xs={12}
            // style={{padding: '0', margin: '0'}}
            // lg={{offset: 3, span: 6}}
          >
            <Row
              style={{
                justifyContent: 'space-evenly',
                alignContent: 'center'
              }}
            >
              <a href="https://github.com/kyleLee95/" target="_blank">
                <Image src="/GitHub-Mark-120px-plus.png" alt="github" />
              </a>
              <a href="mailto:kyle@kylelee.dev" target="_blank">
                <Image src="/closed-envelope-circle.png" alt="email" />
              </a>
              <a href="https://www.linkedin.com/in/kylelee2/" target="_blank">
                <Image src="/linkedin-logo-button.png" alt="linkedIn" />
              </a>
              <a href="/KyleLeeResume.pdf" download="KyleLeeResume.pdf">
                <Image src="/resume.png" alt="resume" />
              </a>
            </Row>
          </Col>
        </Row>
        <br />
      </div>
    )
  }
}

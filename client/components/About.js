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
      <div className="container-fluid" style={{fontFamily: 'serif'}}>
        <br />
        <Row>
          <Col
            className="text-center"
            xs={12}
            // style={{padding: '0', margin: '0'}}
            // lg={{offset: 3, span: 6}}
          >
            <h2>Connect</h2>
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
        <hr />
        <Row style={{justifyContent: 'center', textAlign: 'center'}}>
          <h2>About</h2>
          <Col xs={12} sm={12} md={12}>
            <Card style={{marginLeft: '25%', width: '50%'}}>
              <Card.Img variant="top" src="profile-1.jpg" />
              <Card.Body>
                My name is Kyle Lee and I am a novice programmer and aspiring
                startup founder. My journey into programming started after I
                finished undergrad (University of Chicago ‘18, B.A. Art
                History). Having interned at a small (now-medium) retail luxury
                streetwear and designer clothing store called Notre I knew that
                I was interested in start ups and business but wasn’t sure if
                working in the fashion industry would be correct for me. At the
                encouragement of some friends, I decided to give programming a
                try. After finishing CodeCademy’s basic Web Development track
                and deciding that I “didn’t hate programming” I decided that I
                might like to try to further grow as a programmer and even make
                a living as one. Shortly after, I applied to a coding bootcamp
                called Fullstack Academy and completed the program in April
                2019. Since completing the program, I have found that not only
                do I “not hate” programming but in fact enjoy it quite a bit
                because there are many ways of doing the same thing. I am
                currently working at my family’s business called Golden Country
                Oriental Foods LLC. While programming is no longer a part of my
                daily routine, I am still working on small side projects that (I
                hope) can solve some inefficiency in any space or industry and
                potentially lead to the creation of a startup. Outside of my own
                time programming and trying to build a startup, I enjoy
                practicing film photography, keeping up with the latest in
                fashion, reading autobiographies of entrepreneurs, and listening
                to the podcasts “How I Built This with Guy Raz” and “Masters of
                Scale”.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

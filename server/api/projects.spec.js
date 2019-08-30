/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Project = db.model('project')

describe('projects routes', () => {
  //makes sure DB is synced
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/projects/', () => {
    //Creates the mood
    beforeEach(() => {
      return Project.create({
        title: 'test testy',
        description: 'test',
        gitHubLink: 'https://github.com/FullstackAcademy/boilermaker',
        deployLink: 'https://github.com/FullstackAcademy/boilermaker',
        image: ''
      })
    })

    it('POST /api/projects/', async () => {
      const project = {
        title: 'test project',
        description: 'test',
        gitHubLink: 'https://github.com/FullstackAcademy/boilermaker',
        deployLink: 'https://github.com/FullstackAcademy/boilermaker',
        image: 'test'
      }
      //create the new mood
      const createProject = await request(app)
        .post('/api/projects/')
        .send(project)
        .expect(200)
      expect(createProject.body).to.be.an('array')
      expect(createProject.body).to.have.lengthOf(2)
      expect(createProject.body[1]).to.be.an('object')
      expect(createProject.body[1]).to.have.property('image')
      expect(createProject.body[1].image).to.be.an('string')
    })

    //get projects in the shape of an array of objects [{}, {}, {}]
    //use offset to simulate a get request for the inital 10 projects
    it('GET /api/projects/', async () => {
      const get = await request(app)
        .get('/api/projects/')
        .expect(200)

      expect(get.body).to.be.an('array')
      expect(get.body[0].title).to.equal('test testy')
      expect(get.body[0].gitHubLink).to.not.equal(null)
      expect(get.body[0].deployLink).to.not.equal(null)
      expect(get.body[0].image).to.not.equal(null)
    })

    it('DELETE /api/projects/', async () => {
      const delProjects = await request(app)
        .delete('/api/projects/1')
        .expect(200)
      expect(delProjects.body).to.be.an('array')
      expect(delProjects.body[0]).to.be.equal(undefined)
    })
  })
})

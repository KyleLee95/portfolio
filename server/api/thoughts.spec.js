const {expect, should} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Thought = db.model('thoughts')

describe('Thought routes', () => {
  //makes sure DB is synced
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/thoughts/', () => {
    //Creates the thought
    beforeEach(() => {
      return Thought.create({
        title: 'test thought title',
        content: 'testing 123'
      })
    })

    it('POST /api/thoughts/', async () => {
      const thought = {
        title: 'test another thought title',
        content: 'lorem ipsum'
      }
      //create the new mood
      const createThought = await request(app)
        .post('/api/thoughts/')
        .send(thought)
        .expect(200)

      expect(createThought.body).to.be.an('array')
      expect(createThought.body).to.have.lengthOf(2)
      expect(createThought.body[1]).to.be.an('object')
      expect(createThought.body[1]).to.have.property('title')
    })

    //get thoughts in the shape of an array of objects [{}, {}, {}]

    it('GET /api/thoughts/', async () => {
      const get = await request(app)
        .get('/api/thoughts/')
        .expect(200)

      expect(get.body).to.be.an('array')
      expect(get.body[0].content).to.be.a('string')
    })

    it('DELETE /api/thoughts/', async () => {
      const delThoughts = await request(app)
        .delete('/api/thoughts/1')
        .expect(200)
      expect(delThoughts.body).to.be.an('array')
      expect(delThoughts.body[0]).to.be.equal(undefined)
    })
  })
})

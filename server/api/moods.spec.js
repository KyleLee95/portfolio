/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Mood = db.model('moods')

describe('Mood routes', () => {
  //makes sure DB is synced
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/moods/', () => {
    //Creates the mood
    beforeEach(() => {
      return Mood.create({
        url: 'https://www.youtube.com/watch?v=_1c1zhV3vHk',
        type: 'VIDEO'
      })
    })

    it('POST /api/moods/', async () => {
      const mood = {
        type: 'VIDEO',
        url: 'https://www.youtube.com/watch?v=2pIJoPkh9IU'
      }
      //create the new mood
      const createMood = await request(app)
        .post('/api/moods/')
        .send(mood)
        .expect(200)

      expect(createMood.body).to.be.an('array')
      expect(createMood.body).to.have.lengthOf(2)
      expect(createMood.body[1]).to.be.an('object')
      expect(createMood.body[1]).to.have.property('url')
    })

    //get moods in the shape of an array of objects [{}, {}, {}]
    //use offset to simulate a get request for the inital 10 moods
    it('GET /api/moods/offset/0', async () => {
      const get = await request(app)
        .get('/api/moods/offset/0')
        .expect(200)

      expect(get.body).to.be.an('array')
      expect(get.body[0].type).to.be.equal('VIDEO')
    })

    it('DELETE /api/moods/', async () => {
      const delMoods = await request(app)
        .delete('/api/moods/1')
        .expect(200)
      expect(delMoods.body).to.be.an('array')
      expect(delMoods.body[0]).to.be.equal(undefined)
    })
  })
})

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
    // const moodExample = {
    //   type: 'VIDEO',
    //   url: 'https://www.youtube.com/watch?v=_1c1zhV3vHk'
    // }
    //Creates the mood
    beforeEach(() => {
      return Mood.create({
        url: 'https://www.youtube.com/watch?v=_1c1zhV3vHk',
        type: 'VIDEO'
      })
    })
    //get moods in the shape of an array of objects [{}, {}, {}]
    //use offset to simulate a get request for the inital 10 moods
    it('GET /api/moods/offset/0', async () => {
      const res = await request(app)
        .get('/api/moods/offset/0')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].type).to.be.equal('VIDEO')
    })
  })
})

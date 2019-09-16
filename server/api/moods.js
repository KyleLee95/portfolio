const router = require('express').Router()
const {Mood} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router

router.get('/managerMood', async (req, res, next) => {
  try {
    //gets all moods for manager
    const moods = await Mood.findAll({})

    res.json(moods).status(200)
  } catch (err) {
    next(err)
  }
})

router.get('/offSet/:offSet', async (req, res, next) => {
  try {
    //Sequelize's offSet featuer wasn't working so this is my own ghetto offSet
    //First offSet of moods is 0 so you get from 0-10
    //Second offSet of moods is 10, so you get 10-20
    const upperEnd = Number(req.params.offSet) + 10
    const moods = await Mood.findAll({
      where: {
        id: {[Op.between]: [Number(req.params.offSet), Number(upperEnd)]}
      }
    })

    res.json(moods).status(200)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const mood = await Mood.findByPk(req.params.id)
    res.json(mood).status(200)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const mood = await Mood.findByPk(req.params.id)
    await mood.destroy()
    const moods = await Mood.findAll()
    res.status(200).send(moods)
  } catch (err) {
    next(err)
  }
})

router.put('/edit/:id', async (req, res, next) => {
  try {
    const mood = await Mood.findByPk(req.params.id)
    await mood.update({
      title: req.body.title,
      type: req.body.type,
      url: req.body.url,
      image: req.body.image
    })
    const moods = await Mood.findAll()
    res.status(200).send(moods)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Mood.create({
      type: req.body.type,
      url: req.body.url,
      image: req.body.image
    })
    const moods = await Mood.findAll()
    res.status(200).send(moods)
  } catch (err) {
    next(err)
  }
})

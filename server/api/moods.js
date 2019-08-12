const router = require('express').Router()
const {Mood} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const mood = await Mood.findByPk(req.params.id)
    res.json(mood).status(200)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const moods = await Mood.findAll()
    res.json(moods)
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
      title: req.body.title,
      type: req.body.type,
      url: req.body.url,
      image: req.body.image
    })
    const moods = Mood.findAll()
    res.json(moods)
  } catch (err) {
    next(err)
  }
})

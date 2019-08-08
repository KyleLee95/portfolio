const router = require('express').Router()
const {Thought} = require('../db/models')

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const thought = await Thought.findByPk(req.params.id)
    res.json(thought).status(200)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const thoughts = await Thought.findAll()
    res.json(thoughts)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const thought = await Thought.findByPk(req.params.id)
    await thought.destroy()
    const thoughts = await Thought.findAll()
    res.status(200).send(thoughts)
  } catch (err) {
    next(err)
  }
})

router.put('/edit/:id', async (req, res, next) => {
  try {
    const thought = await Thought.findByPk(req.params.id)
    await thought.update({
      title: req.body.title,
      content: req.body.content
    })
    const thoughts = await Thought.findAll()
    res.status(200).send(thoughts)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Thought.create({
      title: req.body.title,
      content: req.body.content
    })
    const thoughts = Thought.findAll()
    res.json(thoughts)
  } catch (err) {
    next(err)
  }
})

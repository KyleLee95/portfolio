const router = require('express').Router()
const {User, Project} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const projects = await user.getProjects()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const projects = await user.getProjects()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    const projects = await user.getProjects()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

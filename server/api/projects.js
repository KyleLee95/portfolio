const router = require('express').Router()
const {User, Project} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id)
    res.json(project).status(200)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id)
    await project.destroy()
    const projects = await Project.findAll()
    res.status(200).send(projects)
  } catch (err) {
    next(err)
  }
})

router.put('/edit/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id)
    await project.update({
      title: req.body.title,
      description: req.body.description,
      gitHubLink: req.body.gitHubLink,
      deployLink: req.body.deployLink,
      image: req.body.image
    })
    const projects = await Project.findAll()
    res.status(200).send(projects)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Project.create({
      title: req.body.title,
      description: req.body.description,
      gitHubLink: req.body.gitHubLink,
      deployLink: req.body.deployLink,
      image: req.body.image
    })
    const projects = Project.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

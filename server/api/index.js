const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/projects', require('./projects'))
router.use('/thoughts', require('./thoughts'))
router.use('/moods', require('./moods'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

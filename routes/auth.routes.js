const {Router} = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const {Jira} = require('../src/Jira')

router = Router()

router.post('/login', async (req, res) => {
  try {

    const {username, password} = req.body

    const jira = new Jira('https://devjira.skyeng.ru', '/rest/api/2', username, password)

    const {data, status} = await jira.getUserInfo(username)

    if (status !== 200) {
      return res.status(status).json({message: 'Пользователь не найден'})
    }

    const token = jwt.sign(
      {username, password},
      config.get('jwtSecret'),
      { expiresIn: '1d'}
    )

    res.status(status).json({data, token})

  } catch (e) {
    res.status(status).json({message:'Что-то пошло не так, попробуйте снова'})
  }
})

module.exports = router

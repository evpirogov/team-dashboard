const auth = require('../middleware/auth.middleware')

const {Jira} = require('../src/Jira')
const {getChartData} = require("../src/Stats");


const {Router} = require('express')
router = Router()

router.get('/issue/:issueKey', auth, async (req,res) => {
  console.log('Запустился поиск задачи')

  const {username, password} = req.user
  const jira = new Jira('https://devjira.skyeng.ru', '/rest/api/2', username, password)
  try {
    const issue = await jira.getIssueByKey(req.params.issueKey)
    res.status(200).json(issue)
  } catch (e) {
    console.log(e)
    res.status(500).json({message:'Что-то пошло не так попробуйте снова'})
  }
})

router.get('/quarterStats', auth, async (req,res) => {
  console.log('Запустился подсчет квартальной статистики')

  const {username, password} = req.user
  const jira = new Jira('https://devjira.skyeng.ru', '/rest/api/2', username, password)
  try{
    const issues = await jira.getIssuesFromJQL('project%20%3D%20"Kids%20Core"%20and%20status%20changed%20AFTER%20"2020%2F05%2F30"%20AND%20!(status%20%3D%20Closed%20and%20status%20changed%20BEFORE%20"2020%2F07%2F01")%20and%20issuetype%20!%3D%20Epic%20', ['worklog','changelog'])//['worklog','changelog']

    issues.forEach(e => {
      e.timeline = jira.getIssueTimeline(e)
    })

    const {labels, flowDatasets, metrics, teamMetrics, devMetrics, personalWorklog} = getChartData(issues)

    res.json({labels, flowDatasets, metrics, teamMetrics, devMetrics, personalWorklog})
  }catch (e) {
    console.log(e)
    res.status(500).json({message:'Что-то пошло не так попробуйте снова'})
  }
})

module.exports = router
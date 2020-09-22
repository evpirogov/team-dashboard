const axios = require('axios')


/**
* @param domain - https://devjira.skyeng.ru
* @param apiUrl - /rest/api/2
 */
class Jira {
  constructor(domain, apiUrl, username, password) {
    this.jiraApiUrl = `${domain}${apiUrl}`
    this.config = {
      auth:{
        username: username,
        password: password
      }
    }
  }

  getUserInfo = async (login) => {
    try {
      const res = await axios.get(`${this.jiraApiUrl}/user?username=${login}`, this.config)
      return res
    } catch (e) {
      return e.response
    }
  }

  getIssueByKey = async (issueKey) => {
    try{
      const res = await axios.get(`${this.jiraApiUrl}/issue/${issueKey}`, this.config)
      return res.data
    }catch (e) {
      console.log(e)
      return false
    }
  }

  expandIssue = async (key, expand=[]) => {
    const res = await axios.get(`${this.jiraApiUrl}/issue/${key}?expand=${expand.join(',')}`, this.config)
    return res.data
  }

  getIssuesFromJQL = async (jql, expand = []) => {
    try {
      const {data} = await axios.get(`${this.jiraApiUrl}/search/?jql=${jql}`, this.config)
      const pages = Math.ceil(data.total / data.maxResults)

      if (pages > 1) {
        for (let i = 1; i < pages; i++) {
          const startIndex = i * 50

          const { data: chunk } = await axios.get(
            `${this.jiraApiUrl}/search/?jql=${jql}&startAt=${startIndex}`,
            this.config
          )
          data.issues = data.issues.concat(chunk.issues)
        }
      }

      if (expand.length === 0) return data.issues

      return await Promise.all(data.issues.map( e => this.expandIssue(e.key, expand)))
    } catch (e) {
      console.log(e)
    }
  }

  getIssueTimeline = issue => {
    let timeline = []

    issue.changelog.histories.forEach(h => {
      h.items = h.items.filter(i => i.field == 'status')
    })

    issue.changelog.histories = issue.changelog.histories.filter(e => !!e.items.length)

    timeline.push({
      status: issue.changelog.histories[0].items[0].fromString,
      startDate: new Date(issue.fields.created)
    })

    issue.changelog.histories.forEach(h => {
      timeline.push({
        status: h.items[0].toString,
        startDate: new Date(h.created)
      })
    })

    for(let i = 0; i < timeline.length; i++) {
      timeline[i].endDate = timeline[i+1] ? timeline[i+1].startDate : new Date(Date.now())
      timeline[i].spendTime = timeline[i].end - timeline[i].startDate
    }

    timeline[timeline.length - 1].totalSpendTime = timeline.reduce((a, b) => a + (b.spendTime || 0), 0)

    return timeline
  }
}


module.exports = {
  Jira
}

const getChartData = (issues, quarterIssues, flowDatasets = [], timemarkers = [], teamMetrics= [], devMetrics = [], personalWorklog = []) => {
  const activeStatuses = [
    "In Prod Testing",
    "Need Prod Testing",
    "Need deploy",
    "Waiting",
    "In testing",
    "Ready for test",
    "Review",
    "Code review",
    "Need redev",
    "In Development",
    "In Progress",
    // "Ready for Development",
    // "Tech review",
  ]
  timemarkers =  [
    '07.03.2020',
    '07.10.2020',
    '07.17.2020',
    '07.24.2020',
    '07.31.2020',
    '08.07.2020',
    '08.14.2020',
    '08.21.2020',
    '08.28.2020',
    '09.04.2020',
    '09.11.2020',
    '09.18.2020',
    '09.25.2020'
  ]
  // timemarkers =  [
  //   '07.01.2020',
  //   '07.02.2020',
  //   '07.03.2020',
  //   '07.04.2020',
  //   '07.05.2020',
  //   '07.06.2020',
  //   '07.07.2020',
  //   '07.08.2020',
  //   '07.09.2020',
  //   '07.10.2020',
  //   '07.11.2020',
  //   '07.12.2020',
  //   '07.13.2020',
  //   '07.14.2020',
  //   '07.15.2020',
  //   '07.16.2020',
  //   '07.17.2020',
  //   '07.18.2020',
  //   '07.19.2020',
  //   '07.20.2020',
  //   '07.21.2020',
  //   '07.22.2020',
  //   '07.23.2020',
  //   '07.24.2020',
  //   '07.25.2020',
  //   '07.26.2020',
  //   '07.27.2020',
  //   '07.28.2020',
  //   '07.29.2020',
  //   '07.30.2020',
  //   '07.31.2020',
  //   '08.01.2020',
  //   '08.02.2020',
  //   '08.03.2020',
  //   '08.04.2020',
  //   '08.05.2020',
  //   '08.06.2020',
  //   '08.07.2020',
  //   '08.08.2020',
  //   '08.09.2020',
  //   '08.10.2020',
  //   '08.11.2020',
  //   '08.12.2020',
  //   '08.13.2020',
  //   '08.14.2020',
  //   '08.15.2020',
  //   '08.16.2020',
  //   '08.17.2020',
  //   '08.18.2020',
  //   '08.19.2020',
  //   '08.20.2020',
  //   '08.21.2020',
  //   '08.22.2020',
  //   '08.23.2020',
  //   '08.24.2020',
  //   '08.25.2020',
  //   '08.26.2020',
  //   '08.27.2020',
  //   '08.28.2020',
  //   '08.29.2020',
  //   '08.30.2020',
  //   '08.31.2020',
  //   '09.01.2020',
  //   '09.02.2020',
  //   '09.03.2020',
  //   '09.04.2020',
  //   '09.05.2020',
  //   '09.06.2020',
  //   '09.07.2020',
  //   '09.08.2020',
  //   '09.09.2020',
  //   '09.10.2020',
  //   '09.11.2020',
  //   '09.12.2020',
  //   '09.13.2020',
  //   '09.14.2020',
  //   '09.15.2020',
  //   '09.16.2020',
  //   '09.17.2020',
  //   '09.18.2020',
  //   '09.19.2020',
  //   '09.20.2020',
  //   '09.21.2020',
  //   '09.22.2020',
  //   '09.23.2020',
  //   '09.24.2020',
  //   '09.25.2020',
  //   '09.26.2020',
  //   '09.27.2020',
  //   '09.28.2020',
  //   '09.29.2020',
  //   '09.30.2020',
  // ]
  flowDatasets = [
    {
      label: "Closed",
      fill: true,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "In Prod Testing",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f66d03',
      // pointBackgroundColor: '#f66d03',
      borderColor: '#f66d03',
      // pointHighlightStroke: '#f66d03',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Need Prod Testing",
      fill: true,
      spanGaps: true,
      backgroundColor: '#4285f4',
      // pointBackgroundColor: '#4285f4',
      borderColor: '#4285f4',
      // pointHighlightStroke: '#4285f4',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Need deploy",
      fill: true,
      spanGaps: true,
      backgroundColor: '#ea4335',
      // pointBackgroundColor: '#ea4335',
      borderColor: '#ea4335',
      // pointHighlightStroke: '#ea4335',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Waiting for Data",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Waiting",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "In testing",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Ready for test",
      fill: true,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Review",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f66d03',
      // pointBackgroundColor: '#f66d03',
      borderColor: '#f66d03',
      // pointHighlightStroke: '#f66d03',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Code review",
      fill: true,
      spanGaps: true,
      backgroundColor: '#4285f4',
      // pointBackgroundColor: '#4285f4',
      borderColor: '#4285f4',
      // pointHighlightStroke: '#4285f4',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Need redev",
      fill: true,
      spanGaps: true,
      backgroundColor: '#ea4335',
      // pointBackgroundColor: '#ea4335',
      borderColor: '#ea4335',
      // pointHighlightStroke: '#ea4335',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "In Development",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "In Progress",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Ready for Development",
      fill: true,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "Tech review",
      fill: true,
      spanGaps: true,
      backgroundColor: '#f66d03',
      // pointBackgroundColor: '#f66d03',
      borderColor: '#f66d03',
      // pointHighlightStroke: '#f66d03',
      data: new Array(timemarkers.length).fill(0),
    }
  ]
  teamMetrics = [
    {
      label: "active",
      fill: false,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: [],
    },
    {
      label: "waiting",
      fill: false,
      spanGaps: true,
      backgroundColor: '#f66d03',
      // pointBackgroundColor: '#f66d03',
      borderColor: '#f66d03',
      // pointHighlightStroke: '#f66d03',
      data: [],
    },
    {
      label: "inFlow",
      fill: false,
      spanGaps: true,
      backgroundColor: '#4285f4',
      // pointBackgroundColor: '#4285f4',
      borderColor: '#4285f4',
      // pointHighlightStroke: '#4285f4',
      data: [],
    },
    {
      label: "closed",
      fill: false,
      spanGaps: true,
      backgroundColor: '#ea4335',
      // pointBackgroundColor: '#ea4335',
      borderColor: '#ea4335',
      // pointHighlightStroke: '#ea4335',
      data: [],
    },
    {
      label: "activeFocuses",
      fill: false,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    }
  ]
  devMetrics = [
    {
      label: "worklog-time",
      fill: false,
      spanGaps: true,
      backgroundColor: '#800080',
      // pointBackgroundColor: '#800080',
      borderColor: '#800080',
      // pointHighlightStroke: '#800080',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "worklog-front",
      fill: false,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "worklog-back",
      fill: false,
      spanGaps: true,
      backgroundColor: '#4285f4',
      // pointBackgroundColor: '#4285f4',
      borderColor: '#4285f4',
      // pointHighlightStroke: '#4285f4',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "redev",
      fill: false,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    }]
  personalWorklog = [
    {
      label: "o.shurmin",
      fill: false,
      spanGaps: true,
      backgroundColor: '#800080',
      // pointBackgroundColor: '#800080',
      borderColor: '#800080',
      // pointHighlightStroke: '#800080',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "s.pushkin",
      fill: false,
      spanGaps: true,
      backgroundColor: '#34a853',
      // pointBackgroundColor: '#34a853',
      borderColor: '#34a853',
      // pointHighlightStroke: '#34a853',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "dmitriy.formos",
      fill: false,
      spanGaps: true,
      backgroundColor: '#4285f4',
      // pointBackgroundColor: '#4285f4',
      borderColor: '#4285f4',
      // pointHighlightStroke: '#4285f4',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "v.kravtsov",
      fill: false,
      spanGaps: true,
      backgroundColor: '#ea4335',
      // pointBackgroundColor: '#ea4335',
      borderColor: '#ea4335',
      // pointHighlightStroke: '#ea4335',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "m.serov",
      fill: false,
      spanGaps: true,
      backgroundColor: '#f9bc04',
      // pointBackgroundColor: '#f9bc04',
      borderColor: '#f9bc04',
      // pointHighlightStroke: '#f9bc04',
      data: new Array(timemarkers.length).fill(0),
    },
    {
      label: "somebody",
      fill: false,
      spanGaps: true,
      backgroundColor: '#f66d03',
      // pointBackgroundColor: '#f66d03',
      borderColor: '#f66d03',
      // pointHighlightStroke: '#f66d03',
      data: new Array(timemarkers.length).fill(0),
    },
  ]
  let totalSpendTime = 0
  let plannedSpendTime = 0
  let notPlannedSpentTime
  let metrics = []
  const timePeriod = new Date(timemarkers[1]) - new Date(timemarkers[0])
  const labels = timemarkers.map(e => e.slice(0,-5))

  for (let t = 0; t < timemarkers.length; t++) {
    let activeFocuses = []

    issues.forEach(issue => {
      issue.fields.worklog.worklogs.forEach(worklog => {
        const worklogData = new Date(worklog.started)
        const worklogEndDate = new Date(timemarkers[t])
        const worklogStartDate = worklogEndDate - timePeriod //     m


        if (
          worklogData >= worklogStartDate
          && worklogData < worklogEndDate
          && worklog.author.name !== 'a.novichkova'
        ) {
          totalSpendTime += worklog.timeSpentSeconds / 3600
          devMetrics[0].data[t] += worklog.timeSpentSeconds / 3600
          const redev = issue.timeline.filter(t => t.status.indexOf("Need redev") !== -1).shift()
          if (redev && worklogData >= redev.startDate) devMetrics[3].data[t] += worklog.timeSpentSeconds / 3600

          switch (worklog.author.name) {
            case 'o.shurmin':
              devMetrics[2].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[0].data[t] += worklog.timeSpentSeconds / 3600
              break;

            case 's.pushkin':
              devMetrics[2].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[1].data[t] += worklog.timeSpentSeconds / 3600
              break;

            case 'dmitriy.formos':
              devMetrics[2].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[2].data[t] += worklog.timeSpentSeconds / 3600
              break;

            case 'v.kravtsov':
              devMetrics[1].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[3].data[t] += worklog.timeSpentSeconds / 3600
              break;

            case 'm.serov':
              devMetrics[1].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[4].data[t] += worklog.timeSpentSeconds / 3600
              break;

            default:
              devMetrics[1].data[t] += worklog.timeSpentSeconds / 3600
              personalWorklog[5].data[t] += worklog.timeSpentSeconds / 3600
              break;
          }
        }
      })

      issue.timeline.forEach(breackpoint => {
        for (let s = 0; s < flowDatasets.length; s++) {
          if (breackpoint.status === flowDatasets[s].label) {
            const date = new Date(timemarkers[t])
            const statusStartDate = new Date(breackpoint.startDate)
            const statusEndDate = new Date(breackpoint.endDate)

            if (date >= statusStartDate && date < statusEndDate) {
              flowDatasets[s].data[t]++

              if (activeStatuses.includes(breackpoint.status) && !activeFocuses.includes(issue.fields.customfield_10006)) {
                activeFocuses.push(issue.fields.customfield_10006)
              }
            }
          }
        }
      })
    })
    teamMetrics[4].data[t] = activeFocuses.length
    // console.log(activeFocuses)
  }

  timemarkers.forEach((t,w) => {
    const weekStats = {
      active: 0,
      waiting: 0,
      inFlow: 0,
      closed: 0
    }

    //active
    flowDatasets.forEach((e, i) => {
      if (i === 0 || i === 13 || i === 14) return
      weekStats.active += e.data[w]
    })

    //waiting
    flowDatasets.forEach((e, i) => {
      if (i !== 13 && i !== 14) return
      weekStats.waiting += e.data[w]
    })

    //inFlow
    flowDatasets.forEach((e, i) => {
      if (i === 0) return

      weekStats.inFlow += e.data[w]
    })

    // closed
    if (w !== 0 && flowDatasets[0].data[w] !== 0) {
      weekStats.closed = flowDatasets[0].data[w] - flowDatasets[0].data[w-1]
    }

    metrics.push(weekStats)

    teamMetrics.forEach(m => {
      m.data.push(weekStats[m.label])
    })

  })

  quarterIssues.forEach(issue => {
    issue.fields.worklog.worklogs.forEach(worklog => {
      if (worklog.author.name !== 'a.novichkova') {
        plannedSpendTime += worklog.timeSpentSeconds / 3600
      }
    })
  })

  notPlannedSpentTime = Math.trunc((totalSpendTime - plannedSpendTime)*100/totalSpendTime)

  return {labels, flowDatasets, metrics, teamMetrics, devMetrics, personalWorklog, notPlannedSpentTime}
}
module.exports = {
  getChartData
}

const getChartData = (issues, flowDatasets = [], timemarkers = [], teamMetrics=[]) => {
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
  ]

  const labels = timemarkers.map(e => e.slice(0,-5))

  issues.forEach(issue => {
    issue.timeline.forEach(breackpoint => {
      for (let s = 0; s < flowDatasets.length; s++) {
        for (let t = 0; t < timemarkers.length; t++) {
          if (breackpoint.status === flowDatasets[s].label) {
            const date = new Date(timemarkers[t])
            const statusStartDate = new Date(breackpoint.startDate)
            const statusEndDate = new Date(breackpoint.endDate)

            if (date >= statusStartDate && date < statusEndDate) {
              flowDatasets[s].data[t]++
            }
          }
        }
      }
    })
  })

  let metrics = []
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
      if (i !== 13 || i !== 14) return
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

  return {labels, datasets: flowDatasets, metrics, teamMetrics}
}

module.exports = {
  getChartData
}
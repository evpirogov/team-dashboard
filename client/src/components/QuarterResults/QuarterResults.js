import React, {useEffect, useCallback, useContext} from "react"
import {useState} from "react"
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

import $ from './QuarterResults.module.scss'
import {StackedLineChart} from "../Charts/StackedLineChart";
import {ProgressBar} from "./ProgressBar/ProgressBar";
import {Loader} from "../Loader/Loader";

export const QuarterResult = () => {
  const {request, loading} = useHttp()
  const {token} = useContext(AuthContext)
  const [dataFlow, setData] = useState({})


  const quarterAccomplishmentProgress = {
    title: `Percentage of accomplishment (${dataFlow.quarterProgress?.total} issues)`,
    chunks: [
      {
        chunkTitle: 'done',
        width: `${dataFlow.quarterProgress?.done}%`,
        style: {
          width: `${dataFlow.quarterProgress?.done}%`,
          color: '#fff',
          backgroundColor: '#13892c'
        },
      },
      {
        chunkTitle: 'progress',
        width: `${dataFlow.quarterProgress?.progress}%`,
        style: {
          width: `${dataFlow.quarterProgress?.progress}%`,
          color: '#fff',
          backgroundColor: '#ffc61d'
        },
      },
      {
        chunkTitle: 'todo',
        width: `${dataFlow.quarterProgress?.todo}%`,
        style: {
          width: `${dataFlow.quarterProgress?.todo}%`,
          color: '#fff',
          backgroundColor: '#4a6785'
        },
      }
    ]
  }

  const quarter = {
    title: 'Q3',
    startDate: new Date('7.1.2020'),
    endDate: new Date('10.1.2020'),
    todayDate: new Date(Date.now())
  }

  let quaterAccompleeshed = Math.trunc(((quarter.todayDate - quarter.startDate) / (quarter.endDate - quarter.startDate) * 100))
      quaterAccompleeshed = quaterAccompleeshed < 100 ? `${quaterAccompleeshed}%` : '100%'


  const quarterTimelineProgress = {
    title: 'Quarter timeline',
    style: {
      backgroundColor: '#EEEEEE'
    },
    chunks: [
      {
        chunkTitle: 'past',
        width: quaterAccompleeshed,
        style: {
          width: quaterAccompleeshed,
          color: '#fff',
          backgroundColor: '#4a6785'
        },
      }
    ]
  }

  const quarterNotPlannedSpentTime = {
    title: 'Not planned',
    style: {
      backgroundColor: '#EEEEEE'
    },
    chunks: [
      {
        chunkTitle: '',
        width: `${dataFlow.notPlannedSpentTime}%`,
        style: {
          width: `${dataFlow.notPlannedSpentTime}%`,
          color: '#fff',
          backgroundColor: '#4a6785'
        },
      }
    ]
  }


  const getDataFlow = useCallback(async () => {
    const time_a = new Date(Date.now())

    try{
      const fetchedData = await request(`/api/stats/quarterStats`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setData(fetchedData)
      console.log(fetchedData)
    } catch (e) {}

    const time_b = new Date(Date.now())
    console.log(`${(time_b - time_a)/1000} seconds`)
  }, [request, token])


  useEffect(() => {
    console.log({loading}, 'useEffect: getDat')
    if (!loading) getDataFlow()
    //eslint-disable-next-line
  }, [getDataFlow])

  useEffect(() => {
    console.log('useEffect: dat')
    console.log(dataFlow)
  },[dataFlow])


  return (
    <div className={$.section}>
      <div className={$.block}>
        <h1 className={$.header}>{`Quarter statistics: ${quarter.title}`}</h1>

        {loading && <Loader/>}

        {!loading && <>
          <ProgressBar content={quarterTimelineProgress}/>
          <ProgressBar content={quarterAccomplishmentProgress}/>
          <ProgressBar content={quarterNotPlannedSpentTime}/>
        </>}
      </div>
      {!loading && <>
        <div className={$.block}>
          <div className={$.contentRow}>
            {!loading && <StackedLineChart chartName={'Cumulative diagram (issues)'} datasets={dataFlow.flowDatasets} labels={dataFlow.labels} stacked={true}/>}
          </div>
        </div>

        <div className={$.block}>
          <div className={$.contentRow}>
            {!loading && <StackedLineChart chartName={'Team metrics (issues)'} datasets={dataFlow.teamMetrics} labels={dataFlow.labels} stacked={false}/>}
          </div>
        </div>

        <div className={$.block}>
          <div className={$.contentRow}>
            {!loading && <StackedLineChart chartName={'Logged time (hours)'} datasets={dataFlow.devMetrics} labels={dataFlow.labels} stacked={false}/>}
          </div>
        </div>

        <div className={$.block}>
          <div className={$.contentRow}>
            {!loading && <StackedLineChart chartName={'Personal worklog (hours)'} datasets={dataFlow.personalWorklog} labels={dataFlow.labels} stacked={false}/>}
          </div>
        </div>
      </>}
    </div>
  )
}
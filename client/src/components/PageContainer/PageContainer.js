import React from "react"
import $ from './PageContainer.module.scss'

export const PageContainer = ({children, text}) => {

  return(
    <div className={$.container}>
      {children}
    </div>
  )
}
import React from "react"
import $ from './Loader.module.scss'

export const Loader = () => {

  return (
    <div className={$.loader}>
      <div className={$.box}/>
      <div className={$.box}/>
      <div className={$.box}/>
      <div className={$.box}/>
      <div className={$.box}/>
    </div>
  )
}
import React from "react"
import $ from './AuthInput.module.scss'

export const AuthInput = ({params}) => {
  const {
    header,
    label,
    type,
    id,
    name,
    value,
    changeHandler
  } = params


  return(
    <div className={$.authInputGroup}>
      <div className={$.headerRow}>
        <h3 className={$.inputHeader}>{header}</h3>
        <label className={$.inputLabel} htmlFor={id}>{label}</label>
      </div>
      <input className={$.authInput}
        autoComplete='off'
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={changeHandler}
      />
    </div>
  )
}
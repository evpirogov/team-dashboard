import React, {useContext, useEffect, useState} from "react"
import $ from './AuthPage.module.scss'
import {AuthInput} from "../../components/AuthInput/AuthInput"
import {useHttp} from "../../hooks/http.hook"
import {AuthContext} from "../../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const changeHandler = event => {
    clearError()
    setForm({...form, [event.target.name]: event.target.value})
  }

  const loginHandler = async (event) => {
    event.preventDefault()
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token)
    } catch (e) {}
  }

  useEffect( () => {
    setForm({
      username: '',
      password: ''
    })
  }, [error])

  const usernameInputParams = {
    header: 'Username',
    label: null,
    type: 'text',
    id: 'username',
    name: 'username',
    value: form.username,
    changeHandler
  }
  const passwordInputParams = {
    header: 'Password',
    label: null,
    type: 'password',
    id: 'password',
    name: 'password',
    value: form.password,
    changeHandler
  }

  return (
    <div className={$.authCard}>
      <form onSubmit={loginHandler}>
        <div className={$.authCardHeader}>
          <h1>Welcome</h1>
          <p>Sign in</p>
        </div>
        <div className={$.normalSpace}/>
        <div className={$.authTip}>
          {/*<p>Use your Jira credentials.</p>*/}
          {/*<p>It is safe. Trust me.</p>*/}
        </div>
        <AuthInput params={usernameInputParams}/>
        <AuthInput params={passwordInputParams}/>
        <div className={$.normalSpace} style={{color:'#b00000'}}>{error}</div>
        <button className={$.authButton} onClick={loginHandler}>Sign in</button>
      </form>
    </div>
  )
}
import React, {useContext} from "react"
import {useHistory} from "react-router-dom";
import $ from './PageHeader.module.scss'
import {AuthContext} from "../../context/AuthContext";

export const PageHeader = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav className={$.pageHeader}>
      <div className={$.navWrapper}>
        <div className={`${$.logo} ${$.inlineElement}`}>
          <a href="/">KidsCore</a>
        </div>
        <div className={`${$.links} ${$.inlineElement}`}>
          <ul>
            <li className={`${$.activePage} ${$.inlineElement}`}><a href="/">Dashboard</a></li>
            {/*<li className={$.inlineElement}><a href="/">Meetings</a></li>*/}
            {/*<li className={$.inlineElement}><a href="/">Retro</a></li>*/}
            {/*<li className={$.inlineElement}><a href="/">Polls</a></li>*/}
            <li className={`${$.inlineElement} ${$.signOut}`} onClick={logoutHandler}><a href="/">Sign out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
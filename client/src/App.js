import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

import {PageHeader} from "./components/PageHeader/PageHeader";
import {PageContainer} from "./components/PageContainer/PageContainer";
import {Loader} from "./components/Loader/Loader";


const App = () => {
  const {token, userId, login, logout, ready} = useAuth()
  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)


  if (!ready) return <Loader/>
  return (
      <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
        <BrowserRouter>
          <div className="App">
            {!!isAuthenticated && <PageHeader/>}
            <PageContainer>
              {routes}
            </PageContainer>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;

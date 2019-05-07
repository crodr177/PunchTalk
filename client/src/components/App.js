import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from "react-router-dom"


import '../styles/styles.css'

import ChatField from './ChatField'
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"

class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Provider store={store}>
        <Router>
          <div id="main-container">
            <h2>PunchTalk</h2>
            {/* public routes */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* private routes */}
            <AuthRoute path="/" exact component={ChatField} />
          </div>
        </Router>
      </Provider>
    </AuthProvider>
    )
  }
}

export default App

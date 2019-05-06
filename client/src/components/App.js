import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import '../styles/styles.css'

import ChatField from './ChatField'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="main-container">
          <h1>PunchTalk</h1>
          <ChatField/>
        </div>
      </Provider>
    )
  }
}

export default App

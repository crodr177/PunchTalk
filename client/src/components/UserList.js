import React from 'react'
import { connect } from 'react-redux'

const UserList = (props) => {
  return(
    <div id="user-list">
      <h1>Users Online</h1>
      <ul id="users">
        {
          props.userList.map((username, i) => (
            <li key={"user-" + i}>- {username.user}</li>
          ))
        }
      </ul>
    </div>
  )
}

function mapStateToProps(appState){
  console.log(appState)
  return{
    userList: appState.userList
  }
}

export default connect(mapStateToProps)(UserList)
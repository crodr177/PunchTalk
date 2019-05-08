const initialState = {
  messages: [],
  isTyping: '',
  userList: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_MESSAGES':
      return{...state, messages:[...state.messages, action.payload]}
    case 'IS_TYPING':
      return{...state, isTyping: action.payload}
    case 'GET_USER_LIST':
      return{...state, userList: action.payload}
    default:
      return state
  }
}
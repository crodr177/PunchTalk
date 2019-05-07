const initialState = {
  messages: [],
  isTyping: ''
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_MESSAGES':
      return{...state, messages:[...state.messages, action.payload]}
    case 'IS_TYPING':
      return{...state, isTyping: action.payload}
    default:
      return state
  }
}
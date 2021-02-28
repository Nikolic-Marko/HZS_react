import * as actionTypes from './actions/actionTypes'

const initialState = {
  isAuthenticated: false,
  username: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        isAuthenticated: true,
        username: action.username,
      }
    default: {
      return state
    }
  }
}

export default reducer

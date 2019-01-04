import store from './store' 

const ADD_USER = 'USER/ADD_USER'

export function addUser(user) {
  store.dispatch({ type: ADD_USER, user })
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}

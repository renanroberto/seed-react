import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'

const reducer = combineReducers({
  user,
})

const config = {
  key: 'seed-react',
  storage,
}

const persistedReducer = persistReducer(config, reducer)
const store = createStore(persistedReducer)

export const persistor = persistStore(store)
export default store

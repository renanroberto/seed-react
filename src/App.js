import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/store'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

function NoMatch() {
  return (
    <h2>Ops! Error 404</h2>
  )
}

export default App;

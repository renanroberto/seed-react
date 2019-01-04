import Home from './pages/Home'
import User from './pages/User'
import Error from './pages/Error'
import About from './pages/About'

const routes = [
  { path: '/', component: Home },
  { path: '/user/:id([0-9]+)', component: User },
  { path: '/error', component: Error },
  { path: '/about', component: About },
]

export default routes

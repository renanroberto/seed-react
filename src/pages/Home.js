import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/user/1">User 1</Link><br />
    <Link to="/error">Error Handling</Link><br />
    <Link to="/about">About</Link><br />
  </div>
)

export default Home

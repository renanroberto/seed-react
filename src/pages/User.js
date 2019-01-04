import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../lib/Api'

import ShowUser from '../components/ShowUser'

class User extends Component {
  componentDidMount() {
    this.loadUser()
  }

  componentDidUpdate() {
    console.log('User atualizado')
  }

  loadUser = () => {
    getUser()
  }

  render() {
    return (
      <>
        <Link to='/'>voltar</Link>
        <ShowUser {...this.props.user} />
        <button onClick={this.loadUser}>Atualizar</button>
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(User)

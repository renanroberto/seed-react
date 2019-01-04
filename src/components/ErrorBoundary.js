import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.warn(error)
  }

  render() {
    if (this.state.hasError) return <h3>Ops! Algo deu errado</h3>

    return this.props.children
  }
}

export default ErrorBoundary

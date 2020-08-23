import React, { Component } from 'react'
import styles from './Errors.module.css'

const ErrorScreen = () => (
  <div className={styles.wrapper}>
    <h1>Something went wrong</h1>
    <p>
      Please try to <a href={window.location.pathname}>refresh the page</a> and if it doesn't help, please Email subject="Bug"let me know/Email (attached screenshot would be greatly appreciated).
    </p>
  </div>
)

export default class ErrorBoundary extends Component {
  state = {hasError: false}

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    console.error(error, info)
  }

  render() {
    return this.state.hasError ? <ErrorScreen /> : this.props.children
  }
}

import React, { Component } from 'react'
import { Footer, Header, Main } from './Layouts/index.js'

export default class extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#0e151e' }}>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

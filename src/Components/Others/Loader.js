import React from 'react'
import { BounceLoader } from 'react-spinners'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.loading
    }
  }

  render() {
    return (
      <div
        className="sweet-loading"
        style={{
          display: 'inline-block',
          position: 'absolute',
          left: '50%',
          top: '40vh',
          zIndex: 1000
        }}>
        <BounceLoader color={'#36D7B7'} loading={this.state.loading} />
      </div>
    )
  }
}

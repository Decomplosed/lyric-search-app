import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList } = value
          if (trackList === undefined || trackList.length === 0) {
            return <Spinner />
          } else {
            return <h1>Tracks loaded</h1>
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks

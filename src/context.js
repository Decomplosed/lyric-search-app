import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    trackList: [
      {
        track: {
          track_name: 'abc'
        }
      },
      {
        track: {
          track_name: '123'
        }
      },
      {
        track: {
          track_name: '456'
        }
      }
    ],
    heading: 'Top 10 Tracks'
  }

  componentDidMount() {}

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer

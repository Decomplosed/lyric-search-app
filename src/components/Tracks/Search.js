import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
  state = {
    trackTitle: ''
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className='card card-body mb-4 p-4'>
              <h1 className='duisplay-4 text-center'>
                <i className='fas fa-music'></i> Search For a Song
              </h1>
              <p className='lead text-center'>
                Get the Lyrics for your favourite song!
              </p>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Song title...'
                    name='trackTitle'
                  />
                </div>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search

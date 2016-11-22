import React from 'react'
import moment from 'moment'

export class CurrentTime extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      time: moment() / 1000
    }
    setInterval(()=>{
      this.setState({ time: moment() / 1000 })
    }, 5 * 1000)
  }

  render() {
    return (
      <div>
        <small>
        {
          `unix: ${ this.state.time } human: ${ moment.unix(this.state.time).format('LLLL')}`
        }
        </small>
      </div>
    )
  }

}

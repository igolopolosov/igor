import React from 'react'
import moment from 'moment'

export class DaysFromJune13 extends React.Component {

  constructor(props) {
    super(props)
    
    let cy = moment().get('year'),
      june13 = moment('1994-06-13').set('year', moment().isBefore(cy) ? cy - 1 : cy)
    
    this.state = {
      difference: moment().diff(june13, 'days')
    }

    console.log(this.state, june13)
  }

  render() {

    return (
      <h1>
        {
          `It took ${this.state.difference} days from June 13.`
        }
      </h1>
    )
  }

}

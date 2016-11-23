import React from 'react'
import { withRouter } from 'react-router'


@withRouter
export class Pager extends React.Component {

  static propTypes = {
    pages: React.PropTypes.arrayOf(React.PropTypes.number),
    current: React.PropTypes.number,
    onChange: React.PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  onChange(page) {
    this.props.router.push({
        ...this.props.location,
        query: {page: page}
    })

    this.props.onChange && this.props.onChange(page)
  }

  render() {
    return (
      <div className='pager'>
        {
          (this.props.pages || []).map(page => 
            <a key={page}
               onClick={this.onChange.bind(this, page)}
               className={`pager__item ${this.props.current === page && 'pager__item--active'}`}>
               {page}
            </a>
          )
        }
      </div>
    )
  }

}

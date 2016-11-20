import React from 'react';
import { Link } from 'react-router';

const links = [
  {
    to: '',
    title: 'Home'
  },
  {
    to: 'random-book-line',
    title: 'Random line of Book'
  }
];

export class App extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', textAlign: 'center'}}>
          <div>{
              links.map(link=><Link style={{marginRight:'20px'}} key={link.to} to={link.to}>{link.title}</Link>)
          }</div>
          <div style={{padding:'20px'}}>
            {
              this.props.children
            }
          </div>
      </div>
    );
  }

}

import React from 'react';
import { Link } from 'react-router';
import { Navigation } from './Navigation';

const projectLinks = [
  {
    to: '',
    title: 'Home'
  },
  {
    to: 'prediction-book',
    title: 'Prediction Book'
  }
];

const socialLinks = [
  {
    to: 'https://soundcloud.com/hotkeymusic',
    title: 'SoundCloud'
  },
  {
    to: 'https://github.com/usehotkey',
    title: 'GitHub'
  }
];

export class App extends React.Component {

  render() {
    return (
      <div className='root'>
          <div className='root__header'>
            <Navigation links={projectLinks} />
          </div>
          <div className='root__content'>
            {
              this.props.children
            }
          </div>
          <div className='root__footer'>
              <div>Social:</div>
              <Navigation links={socialLinks} external={true} />
              <div>
                <small>
                  Igor Golopolosov, 2016. igolopolosov@gmail.com
                </small>
              </div>
          </div>
      </div>
    );
  }

}

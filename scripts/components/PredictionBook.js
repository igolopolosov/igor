import React from 'react';

export class PredictionBook extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: '',
      lines: '',
      answer: null
    }
  }

  onChange(e) {

    if (e && e.target && e.target.name) {
      let o = {};
      o[e.target.name] = e.target.value;
      console.log(o);
      this.setState(o);
    }

  }

  generateRandomInt(max) {
    return Math.round(Math.random() * (max - 1)) + 1;
  }

  generateRandomLine() {
    let answer = '';

    if (this.state.pages < 1 || this.state.lines < 1) {
      answer = `Enter above positive number of pages and lines less than ${Number.MAX_VALUE}.`;
    } else {
      answer = `
          Prediction for you is placed on
          page ${this.generateRandomInt(this.state.pages)},  on
          line ${this.generateRandomInt(this.state.lines)}
          from ${this.generateRandomInt(2) === 2 ? 'top' : 'bottom'}.
        `;
    }

    this.setState({ answer: answer });
  }

  render() {

    return (
      <div>
        <h1>Prediction Book</h1>

        <p>
          Choose some book and enter next information.
        </p>

        <p>
          <label>{`Number of pages in a book: `}</label>
          <input name='pages' value={this.state.pages} onChange={this.onChange.bind(this)} type='number'/>
        </p>


        <p>
          <label>{`Number of lines on a page: `}</label>
          <input name='lines' value={this.state.lines} onChange={this.onChange.bind(this)} type='number'/>
        </p>

        <p>
          <button className='btn-primary' onClick={this.generateRandomLine.bind(this)}>Make Magic!</button>
        </p>

        <p>
          {
            this.state.answer
          }
        </p>

      </div>
    );
  }

}

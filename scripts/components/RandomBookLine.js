import React from 'react';

export class RandomBookLine extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      lines: 0,
      answer: null
    }
  }

  onChange(e) {

    if (e && e.target && e.target.name) {
      let o = {};
      o[e.target.name] = e.target.value || 0;
      console.log(o)
      this.setState(o);
    }

  }

  generateRandomInt(max) {
    return Math.round(Math.random() * (max - 1)) + 1
  }

  generateRandomLine() {
    this.setState({
      answer: `
        page: ${this.generateRandomInt(this.state.pages)},
        line: ${this.generateRandomInt(this.state.lines)}
      `
    });
  }

  render() {

    return (
      <div>
        <label>{`Number of pages: `}</label>
        <input name='pages' value={this.state.pages} onChange={this.onChange.bind(this)} type='number'/>

        <br/>

        <label>{`Number of lines on page: `}</label>
        <input name='lines' value={this.state.lines} onChange={this.onChange.bind(this)} type='number'/>

        <br/>

        <button onClick={this.generateRandomLine.bind(this)}>Go!</button>

        <br/>

        {
          this.state.answer
        }
      </div>
    );
  }

}

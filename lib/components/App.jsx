/*jshint esversion: 6 */
import React, { Component } from 'react'
import { scoreWord } from '../helpers/scoreWord'
import Controls from './Controls'
import { Score } from './Score'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      score: null
    }
  }

  componentDidMount() {
    console.log('I love React!');
  }

  handleSubmit(string, number) {
    const score = scoreWord(string, number)
    this.setState({
      score: score
    })
  }

  handleClear() {
    this.setState({score: null})
  }

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <Controls
          onSubmit={this.handleSubmit.bind(this)}
          onClear={this.handleClear.bind(this)}
        />
        <Score score={this.state.score}/>
      </div>
    )
  }
}

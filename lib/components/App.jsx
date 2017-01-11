/*jshint esversion: 6 */
import React, { Component } from 'react'
import { scoreWord } from '../helpers/scoreWord'
import { highScore } from '../helpers/highScore'
import Controls from './Controls'
import { Score } from './Score'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      score: null,
      highScore: 0,
      highScoreMsg: ''
    }
  }

  componentDidMount() {
    console.log('I love React!');
  }

  handleSubmit(string, number) {
    let currentScore = scoreWord(string, number)
    let highScoreCheck = highScore(currentScore, this.state.highScore)
    if(highScoreCheck === 'New High Score!') {
      return this.setState({
        score: currentScore,
        highScore: currentScore,
        highScoreMsg: highScoreCheck
      })
    } else {
      this.setState({
        score: currentScore,
        highScoreMsg: ''
      })
    }
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
        <Score score={this.state.score} message={this.state.highScoreMsg}/>
      </div>
    )
  }
}

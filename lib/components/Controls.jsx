/*jshint esversion: 6 */

import React,{ Component } from 'react'

export default class Controls extends Component {
  handleSubmit(e) {
    e.preventDefault()
    let word = this.refs.word.value
    let multiplier = this.refs.multiplier.value
    if(word.length > 0) {
      this.refs.word.value = ''
      this.refs.multiplier.value = ''
      this.props.onSubmit(word, multiplier)
    } else { this.refs.word.focus() }
  }

  handleClick() {
    this.refs.word.value = ''
    this.refs.multiplier.value = ''
    this.props.onClear()
    this.refs.word.focus()
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        id="controls-component">
        <input
          placeholder="enter a word"
          ref="word"
        />
        <input
          placeholder="enter a multiplier"
          ref="multiplier"
        />
        <button>Submit</button>
        <button onClick={this.handleClick.bind(this)} id="clear-btn">Clear Fields</button>
      </form>
    )
  }
}

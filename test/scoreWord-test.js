/*jshint esversion: 6 */

import { assert, expect } from 'chai'
import { scoreWord } from '../lib/helpers/scoreWord'

describe('scoreWord', () => {
  it('should be a function', () => {
    assert.isFunction(scoreWord)
  })

  it('scores an empty call as 0', () => {
    expect(scoreWord()).to.equal(0)
  })

  it('scores null as 0', () => {
    expect(scoreWord()).to.equal(0)
  })

  it('scores a blank string as 0', () => {
    expect(scoreWord('')).to.equal(0)
  })

  it('scores the letter A as 1', () => {
    expect(scoreWord('A')).to.equal(1)
  })

  it('scores the word racecar as 11', () => {
    expect(scoreWord('racecar')).to.equal(11)
  })

  it('will ignore whitespace', () => {
    expect(scoreWord('   hello   ')).to.equal(8)
  })

  it('is case insensitive', () => {
    expect(scoreWord('HeLLo')).to.equal(8)
  })

  it('accepts a second argument as a multiplier', () => {
    expect(scoreWord('hello', 2)).to.equal(16)
  })
})

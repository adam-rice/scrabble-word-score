/*jshint esversion: 6 */

import React from 'react'

export const Score = ({ score, message }) => {
  return (
    <div id="score-component">
      <h2>{score} {message}</h2>
    </div>
  )
}

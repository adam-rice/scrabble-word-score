/*jshint esversion: 6 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { assert, expect } from 'chai'
import App from '../lib/components/App'

describe('App', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App/>)
    assert.equal(wrapper.type(), 'div')
  })

  it('should have a prop of title', () => {
    const title = 'test'
    const wrapper = shallow(<App title={title}/>)
    expect(wrapper.contains(title)).to.equal(true)
  })
})

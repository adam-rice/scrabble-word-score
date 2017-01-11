/*jshint esversion: 6 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { assert, expect } from 'chai'
import App from '../lib/components/App'
import Controls from '../lib/components/Controls'


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

  it('renders one Controls component', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(Controls)).to.have.length(1)
  })

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App/>)
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})

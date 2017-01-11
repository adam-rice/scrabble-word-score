/*jshint esversion: 6 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { assert, expect } from 'chai'
import App from '../lib/components/App'
import Controls from '../lib/components/Controls'

describe('Controls', () => {
  it('has a clear btn that can be clicked', () => {
    let onClick = sinon.spy()
    const wrapper = mount(<Controls onClear={onClick}/>)
    wrapper.find('#clear-btn').simulate('click')
    expect(onClick).to.have.property('callCount', 1)
  })

  it('renders two buttons', () => {
    const wrapper = shallow(<Controls/>)
    const buttons = wrapper.find('button')
    expect(buttons.length).to.equal(2)
  })
})

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Icon from '../index'

describe('- Icon component', () => {
  it('icon props name should be correct', () => {
    const component = renderer.create(<Icon name="correct" />)
    const tree = component.toTree() as renderer.ReactTestRendererTree
    expect(tree.props.name).toEqual('correct')
  })
  it('icon set classNames "test" will be "test"', () => {
    const component = renderer.create(<Icon name="correct" className="test" />)
    const tree = component.toTree()
    expect(tree!.props.className).toEqual('test')
  })

  it('icon set classNames "undefined" will be empty', () => {
    const component = renderer.create(<Icon name="correct" className={undefined} />)
    const tree = component.toTree()
    expect(tree!.props.className).toBeNull
  })

  it('icon event click', () => {
    const fn = jest.fn()
    const wrapper = mount(<Icon name="correct" onClick={fn} />)
    wrapper.find('span').simulate('click')
    expect(fn).toBeCalled()
  })

  it('there is no name property value will return null', () => {
    const component = renderer.create(<Icon name="" />)
    const tree = component.toJSON()
    expect(tree).toBeNull
  })
})

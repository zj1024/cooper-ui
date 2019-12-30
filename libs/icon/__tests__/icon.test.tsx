import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Icon from '../index'

describe('- Icon component', () => {
  it('props name should be correct', () => {
    const component = renderer.create(<Icon name="correct" />)
    const tree = component.toTree() as renderer.ReactTestRendererTree
    expect(tree.props.name).toEqual('correct')
  })
  it('set classNames "test" will be "test"', () => {
    const component = renderer.create(<Icon name="correct" className="test" />)
    const tree = component.toTree()
    expect(tree!.props.className).toEqual('test')
  })

  it('set classNames "undefined" will be empty', () => {
    const component = renderer.create(<Icon name="correct" className={undefined} />)
    const tree = component.toTree()
    expect(tree!.props.className).toBeNull
  })

  it('event click', () => {
    const fn = jest.fn()
    const wrapper = mount(<Icon name="correct" onClick={fn} />)
    wrapper.find('span').simulate('click')
    expect(fn).toBeCalled()
  })

  it('there is no name property value will return null', () => {
    const component = renderer.create(<Icon />)
    const tree = component.toJSON()
    expect(tree).toBeNull
  })
})

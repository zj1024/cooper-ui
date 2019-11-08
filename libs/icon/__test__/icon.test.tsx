import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Icon from '../index'

describe('- Icon test', () => {
  it('props name should be correct', () => {
    const component = renderer.create(<Icon name="correct" />)
    const tree = component.toTree() as renderer.ReactTestRendererTree
    expect(tree.props.name).toEqual('correct')
  })
  it('there is no name property value will return null', () => {
    const component = renderer.create(<Icon name="" />)
    const tree = component.toJSON()
    expect(tree).toBeNull
  })
})

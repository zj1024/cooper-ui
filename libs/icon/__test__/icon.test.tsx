import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Icon from '../index'

describe('- Icon test', () => {
  it('there is no name property value will return null', () => {
    const component = renderer.create(<Icon name="" />)
    let tree: any = component.toJSON()
    expect(tree).toEqual(null)
  })
})

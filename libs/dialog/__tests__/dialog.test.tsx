import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Dialog from '../index'

describe('- Dialog component', () => {
  it('dialog exist', () => {
    const component = renderer.create(<Dialog>test</Dialog>)
    expect(component.toTree()!.props.children).toEqual('test')
  })
})

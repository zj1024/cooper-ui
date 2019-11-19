import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Foldcard from '../index'

describe('- Tooltip component', () => {
  it('exist', () => {
    const component = renderer.create(<Foldcard fold={'test'}>content</Foldcard>)
    let tree: any = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

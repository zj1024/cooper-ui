import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Tooltip from '../index'
import Button from '../../button'

describe('- Tooltip component', () => {
  it('exist', () => {
    const component = renderer.create(<Tooltip content="666">content</Tooltip>)
    let tree: any = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('placement is bottom', () => {
    const component = renderer.create(
      <Tooltip content="666" placement="bottom">
        <Button>下</Button>
      </Tooltip>,
    )
    let tree: any = component.toTree()
    expect(tree.props.placement).toEqual('bottom')
  })

  it(`children as Button is exist`, () => {
    const component = renderer.create(
      <Tooltip content="666" placement="bottom">
        <Button>下</Button>
      </Tooltip>,
    )
    let tree: any = component.toTree()
    expect(tree.props.children).toMatchSnapshot()
  })
})

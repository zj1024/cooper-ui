import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from '../index'

it('button', () => {
  const component = renderer.create(<Button>this is test</Button>)
  let tree: any = component.toJSON()
  expect(tree.children[0]).toEqual('this is test')
})

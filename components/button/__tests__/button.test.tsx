import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from '../index'

describe('- Button component', () => {
  it('exist', () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })

  it('has children', () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })

  it(`receive className 'test' will have 'test'`, () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })
})

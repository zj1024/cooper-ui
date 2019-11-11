import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from '../index'

describe('- Button component', () => {
  it('button exist', () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })

  it('button has children', () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })

  it('button receive className "test" will have "test"', () => {
    const component = renderer.create(<Button>this is test</Button>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('this is test')
  })
})

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Loading from '../index'

describe('- Button component', () => {
  it('exist', () => {
    const component = renderer.create(<Loading visible={true}>exist</Loading>)
    let tree: any = component.toJSON()
    expect(tree.children[0]).toEqual('exist')
  })

  it(`accept type 'dark'`, () => {
    const component = renderer.create(
      <Loading visible={true} type="dark">
        test
      </Loading>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.className.includes('coo-loading-mask-dark')).toBeTruthy()
  })

  it(`accept color '#188eee'`, () => {
    const component = renderer.create(
      <Loading visible={true} type="dark" color="#188eee">
        test
      </Loading>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].children[0].props.style.color).toEqual('#188eee')
  })
})

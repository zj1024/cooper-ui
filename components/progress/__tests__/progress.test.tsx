import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Progress from '../index'

describe('- Progress component', () => {
  it('exist', () => {
    const component = renderer.create(<Progress />)
    const tree: any = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`accept name`, () => {
    const component = renderer.create(<Progress percent={10} />)
    const tree: any = component.toJSON()
    expect(tree.children[0].children[0].props.style.width).toEqual('10%')
  })

  it(`accept status 'error'`, () => {
    const component = renderer.create(<Progress status="error" />)
    const tree: any = component.toJSON()
    expect(tree.children[0].children[0].props.className.includes('coo-progress-error')).toBeTruthy()
  })

  it(`accept status 'success'`, () => {
    const component = renderer.create(<Progress status="success" />)
    const tree: any = component.toJSON()
    expect(
      tree.children[0].children[0].props.className.includes('coo-progress-success'),
    ).toBeTruthy()
  })

  it(`accept color '#188eee'`, () => {
    const component = renderer.create(<Progress color="#188eee" />)
    const tree: any = component.toJSON()
    expect(tree.children[0].children[0].props.style.background).toEqual('#188eee')
  })
})

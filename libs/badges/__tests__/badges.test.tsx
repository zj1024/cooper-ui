import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Badges from '../index'

const badgeContent = 10
describe('- Badges component', () => {
  it('exist', () => {
    const component = renderer.create(<Badges badgeContent={badgeContent}>test</Badges>)
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].children[0]).toEqual(badgeContent.toString())
  })

  it('accept bgColor', () => {
    const component = renderer.create(
      <Badges badgeContent={badgeContent} bgColor="#188eee">
        test
      </Badges>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.style.background).toEqual('#188eee')
  })

  it(`accept color`, () => {
    const component = renderer.create(
      <Badges badgeContent={badgeContent} color="#fff">
        test
      </Badges>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].props.style.color).toEqual('#fff')
  })

  it(`accept type`, () => {
    const component = renderer.create(
      <Badges badgeContent={badgeContent} type="success">
        test
      </Badges>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.className.includes('coo-badges-success')).toBeTruthy()
  })

  it(`accept placement`, () => {
    const component = renderer.create(
      <Badges badgeContent={badgeContent} placement="left-bottom">
        test
      </Badges>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.className.includes('coo-badges-left-bottom')).toBeTruthy()
  })

  it(`accept dot`, () => {
    const component = renderer.create(
      <Badges badgeContent={badgeContent} dot={true}>
        test
      </Badges>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].children).toBeNull()
  })
})

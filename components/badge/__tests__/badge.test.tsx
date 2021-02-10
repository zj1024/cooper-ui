import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Badge from '../index'

const badgeContent = 10
describe('- Badge component', () => {
  it('exist', () => {
    const component = renderer.create(<Badge badgeContent={badgeContent}>test</Badge>)
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].children[0]).toEqual(badgeContent.toString())
  })

  it('accept bgColor', () => {
    const component = renderer.create(
      <Badge badgeContent={badgeContent} bgColor="#188eee">
        test
      </Badge>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.style.background).toEqual('#188eee')
  })

  it(`accept color`, () => {
    const component = renderer.create(
      <Badge badgeContent={badgeContent} color="#fff">
        test
      </Badge>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].props.style.color).toEqual('#fff')
  })

  it(`accept type`, () => {
    const component = renderer.create(
      <Badge badgeContent={badgeContent} type="success">
        test
      </Badge>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.className.includes('coo-badge-success')).toBeTruthy()
  })

  it(`accept placement`, () => {
    const component = renderer.create(
      <Badge badgeContent={badgeContent} placement="left-bottom">
        test
      </Badge>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].props.className.includes('coo-badge-left-bottom')).toBeTruthy()
  })

  it(`accept dot`, () => {
    const component = renderer.create(
      <Badge badgeContent={badgeContent} dot={true}>
        test
      </Badge>,
    )
    let tree: any = component.toJSON()
    expect(tree.children[1].children[0].children).toBeNull()
  })
})

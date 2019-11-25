import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Radio from '../index'

const options = [
  {
    label: 'Harrison',
    value: 'Harrison',
    disabled: true,
    checked: true,
  },
  {
    label: 'Jack',
    value: 'Jack',
    checked: true,
  },
  {
    label: 'Barry',
    value: 'Barry',
  },
]

const fn = jest.fn()

describe('- Radio component', () => {
  it(`accept mode vertical`, () => {
    const component = renderer.create(<Radio mode="vertical" options={options} onChange={fn} />)
    const tree: any = component.toJSON()
    expect(tree.props.className.includes('coo-radio-vertical')).toBeTruthy()
  })

  it('exist', () => {
    const component = renderer.create(<Radio options={options} onChange={fn} />)
    const tree: any = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`accept name`, () => {
    const component = renderer.create(<Radio name="test" options={options} onChange={fn} />)
    const tree: any = component.toJSON()
    const children = tree.children.map((d: any) => d.children)
    // 找到input标签上的name是否等于test
    const notFindNameLength = children
      .map((d: any) => {
        return d[1].props.name === 'test'
      })
      .filter((d: any) => d === false).length
    expect(notFindNameLength).toEqual(0)
  })
})

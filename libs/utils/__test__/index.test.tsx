import { isString, setPrefixClassName } from '../index'

describe('- Utils isString', () => {
  it(`set 'test' will return true`, () => {
    expect(isString('test')).toEqual(true)
  })
  it(`set true will return false`, () => {
    expect(isString(true)).toEqual(false)
  })
})

describe('- Utils setPrefixClassName', () => {
  it(`set 'coo' will return function do it set 'test' will get a 'coo-test'`, () => {
    const setClass = setPrefixClassName('coo')
    expect(setClass('test')).toEqual('coo-test')
  })
})

import { isString, isNull, isUndefined, setPrefixClassName, stringEqual } from '../index'

describe('- Utils typeof', () => {
  it(`isString set 'test' will return true`, () => {
    expect(isString('test')).toEqual(true)
  })
  it(`isString set true will return false`, () => {
    expect(isString(true)).toEqual(false)
  })
  it(`isNull set null will return true`, () => {
    expect(isNull(null)).toEqual(true)
  })
  it(`isNull set null will return true`, () => {
    expect(isUndefined(undefined)).toEqual(true)
  })
})

describe('- Utils setPrefixClassName', () => {
  it(`set 'coo' will return function do it set 'test' will get a 'coo-test'`, () => {
    const setClass = setPrefixClassName('coo')
    expect(setClass('test')).toEqual('coo-test')
  })
})

describe('- Utils stringEqual', () => {
  it(`set (number: 0, string: '0') will return true`, () => {
    const isEqual = stringEqual(0, '0')
    expect(isEqual).toEqual(true)
  })
  it(`set (boolean: false, string: 'false') will return true`, () => {
    const isEqual = stringEqual(false, 'false')
    expect(isEqual).toEqual(true)
  })
  it(`set (null: null, string: 'null') will return true`, () => {
    const isEqual = stringEqual(null, 'null')
    expect(isEqual).toEqual(true)
  })
  it(`set (undefined: undefined, string: 'undefined') will return true`, () => {
    const isEqual = stringEqual(undefined, 'undefined')
    expect(isEqual).toEqual(true)
  })
})

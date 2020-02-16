import * as React from 'react'
import { useState } from 'react'
import { Image, Foldcard, Radio } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const initFit:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | undefined = 'fill'

  const [fit, setFit] = useState(initFit)

  const options = [
    {
      label: 'fill',
      value: 'fill',
    },
    {
      label: 'contain',
      value: 'contain',
    },
    {
      label: 'cover',
      value: 'cover',
    },
    {
      label: 'none',
      value: 'none',
    },
    {
      label: 'scale-down',
      value: 'scale-down',
    },
  ]

  const onChange = (e: any) => {
    setFit(e.target.value)
  }

  const onError = (e: any) => {
    console.log(e)
  }

  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">设置展示方式</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Radio defaultValue={options[0].value} options={options} onChange={onChange} />
            <Image
              className="w-100 h-100"
              fit={fit}
              src="http://test.zj1024.com/image/penzai.jpg"
            />
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Image
              className="w-100 h-100"
              src="http://test.zj1024.com/image/lundunyan.jpg1"
              onError={onError}
              error={<span>发生错误</span>}
              fallbackSrc="http://test.zj1024.com/image/lundunyan.jpg"
            />
          </Foldcard>
        </div>
      </div>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <section className="flex j-between">
              <div>
                <p className="p-10 text-center">fill</p>
                <Image
                  className="w-100 h-100"
                  fit="fill"
                  src="http://test.zj1024.com/image/penzai.jpg"
                />
              </div>
              <div>
                <p className="p-10 text-center">contain</p>
                <Image
                  className="w-100 h-100"
                  fit="contain"
                  src="http://test.zj1024.com/image/penzai.jpg"
                />
              </div>
              <div>
                <p className="p-10 text-center">cover</p>
                <Image
                  className="w-100 h-100"
                  fit="cover"
                  src="http://test.zj1024.com/image/penzai.jpg"
                />
              </div>
              <div>
                <p className="p-10 text-center">none</p>
                <Image
                  className="w-100 h-100"
                  fit="none"
                  src="http://test.zj1024.com/image/penzai.jpg"
                />
              </div>
              <div>
                <p className="p-10 text-center">scale-down</p>
                <Image
                  className="w-100 h-100"
                  fit="scale-down"
                  src="http://test.zj1024.com/image/penzai.jpg"
                />
              </div>
            </section>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

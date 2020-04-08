import * as React from 'react'
// import { useState } from 'react'
// import { Image, Radio } from '../../../../libs'
import { Image } from '../../../../libs'

export default () => {
  // const initFit:
  //   | '-moz-initial'
  //   | 'inherit'
  //   | 'initial'
  //   | 'revert'
  //   | 'unset'
  //   | 'contain'
  //   | 'cover'
  //   | 'fill'
  //   | 'none'
  //   | 'scale-down'
  //   | undefined = 'fill'

  // const [fit, setFit] = useState(initFit)

  // const options = [
  //   {
  //     label: 'fill',
  //     value: 'fill',
  //   },
  //   {
  //     label: 'contain',
  //     value: 'contain',
  //   },
  //   {
  //     label: 'cover',
  //     value: 'cover',
  //   },
  //   {
  //     label: 'none',
  //     value: 'none',
  //   },
  //   {
  //     label: 'scale-down',
  //     value: 'scale-down',
  //   },
  // ]

  // const onChange = (e: any) => {
  //   setFit(e.target.value)
  // }

  // const onError = (e: any) => {
  //   console.log(e)
  // }

  return (
    <>
      {/* <div className="w-full">
        <h2 className="text-content">设置展示方式</h2>
        <Radio defaultValue={options[0].value} options={options} onChange={onChange} />
        <Image className="w-100 h-100" fit={fit} src="http://test.zj1024.com/image/penzai.jpg" />
      </div>
      <div className="w-full">
        <h2 className="text-content">基础用法</h2>
        <Image
          className="w-100 h-100"
          src="http://test.zj1024.com/image/lundunyan.jpg1"
          onError={onError}
          error={<span>发生错误</span>}
          fallbackSrc="http://test.zj1024.com/image/lundunyan.jpg"
        />
      </div>
      <h2 className="text-content">基础用法</h2>
      <section className="flex j-between">
        <div>
          <p className="p-10 text-center">fill</p>
          <Image className="w-100 h-100" fit="fill" src="http://test.zj1024.com/image/penzai.jpg" />
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
          <Image className="w-100 h-100" fit="none" src="http://test.zj1024.com/image/penzai.jpg" />
        </div>
        <div>
          <p className="p-10 text-center">scale-down</p>
          <Image
            className="w-100 h-100"
            fit="scale-down"
            src="http://test.zj1024.com/image/penzai.jpg"
          />
        </div>
      </section> */}
      <h2 className="text-content p-v-20">懒加载</h2>

      {'3123123123132131312313123123132'.split('').map((d, i) => {
        return <h1 key={i}>{d}</h1>
      })}

      {[
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      ].map(d => {
        return (
          <Image
            lazy
            key={d}
            onLoad={() => console.log('123')}
            className="w-full m-t-200"
            fit="fill"
            src={d}
          />
        )
      })}

      {'312312312313213131232'.split('').map((d, i) => {
        return <h1 key={i}>{d}</h1>
      })}

      {['https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'].map(d => {
        return <Image key={d} className="w-full m-t-200" fit="fill" src={d} />
      })}

      {'312312312313213131232'.split('').map((d, i) => {
        return <h1 key={i}>{d}</h1>
      })}

      {[
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ].map(d => {
        return <Image lazy key={d} className="w-full m-t-200" fit="fill" src={d} />
      })}
    </>
  )
}

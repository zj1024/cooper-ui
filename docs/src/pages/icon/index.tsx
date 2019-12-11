import * as React from 'react'
import { Icon, Foldcard, Tooltip } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

// console.log(require('../../assets/icon/live.svg').default)

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h1>- Icon</h1>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <section className="flex a-center j-between p-20 text-content">
              <Tooltip content="arrow-left">
                <Icon name="arrow-left" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-right">
                <Icon name="arrow-right" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-down">
                <Icon name="arrow-down" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-up">
                <Icon name="arrow-up" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="hint">
                <Icon name="hint" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="eyes">
                <Icon name="eyes" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="correct">
                <Icon name="correct" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="message">
                <Icon name="message" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="share">
                <Icon name="share" className="fs-30 cursor-pointer" />
              </Tooltip>
            </section>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">自定义图标</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <section className="flex a-center j-between p-20 text-content">
              <Tooltip content="arrow-left">
                {/* <Icon component={'1'} className="fs-30 cursor-pointer" /> */}
              </Tooltip>
            </section>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

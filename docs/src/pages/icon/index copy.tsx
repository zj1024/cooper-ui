import * as React from 'react'
import { Icon, Foldcard, Tooltip } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

import LiveIcon from '../../assets/icon/live.svg'

export default () => {
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h1>- Icon</h1>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <section className="flex flex-wrap a-center j-between p-20 text-content">
              <Tooltip content="arrow-down">
                <Icon name="arrow-down" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-left">
                <Icon name="arrow-left" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-right">
                <Icon name="arrow-right" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="arrow-up">
                <Icon name="arrow-up" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="close">
                <Icon name="close" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="correct">
                <Icon name="correct" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="double-left">
                <Icon name="double-left" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="double-right">
                <Icon name="double-right" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="down">
                <Icon name="down" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="ellipsis">
                <Icon name="ellipsis" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="error">
                <Icon name="error" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="eyes">
                <Icon name="eyes" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="hint">
                <Icon name="hint" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="info">
                <Icon name="info" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="loading-rotate">
                <Icon name="loading-rotate" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="loading-spot">
                <Icon name="loading-spot" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="loading">
                <Icon name="loading" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="message">
                <Icon name="message" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="share">
                <Icon name="share" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="success">
                <Icon name="success" className="fs-30 cursor-pointer" />
              </Tooltip>
              <Tooltip content="warning">
                <Icon name="warning" className="fs-30 cursor-pointer" />
              </Tooltip>
            </section>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">自定义图标</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <section className="flex a-center j-between p-20 text-content">
              <Tooltip content="arrow-left">
                <Icon component={LiveIcon} className="fs-30 cursor-pointer" />
              </Tooltip>
            </section>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

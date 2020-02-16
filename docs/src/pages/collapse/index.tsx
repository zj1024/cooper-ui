import * as React from 'react'
import { Collapse, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Collapse accordion={true}>
              <Collapse.Item title="Collapse first">
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
              </Collapse.Item>
              <Collapse.Item title="Collapse first">
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
              </Collapse.Item>
              <Collapse.Item title="Collapse first">
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
              </Collapse.Item>
              <Collapse.Item title="Collapse first">
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
              </Collapse.Item>
            </Collapse>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Collapse accordion={false}>
              <Collapse.Item title="Collapse first">
                <div className="p-20">
                  与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                  在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  <div>
                    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                  </div>
                </div>
              </Collapse.Item>
            </Collapse>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

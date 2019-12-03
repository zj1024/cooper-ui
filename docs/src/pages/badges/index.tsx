import * as React from 'react'
import { Badges, Button, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基本用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Badges badgeContent={9}>
              <Button>Badge</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent={99}>
              <Button>Badge 99</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="99+">
              <Button>Badge 99+</Button>
            </Badges>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">改变位置</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Badges badgeContent="9" placement="left-top">
              <Button>左上角</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="9" placement="left-bottom">
              <Button>左下角</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="9" placement="right-top">
              <Button>右上角</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="9" placement="right-bottom">
              <Button>右下角</Button>
            </Badges>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">自定义文字颜色，徽标背景</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Badges badgeContent={9} bgColor="black">
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="111" bgColor="pink">
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="111" bgColor="#ccc" color="#000">
              <Button>1233</Button>
            </Badges>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">类型</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Badges badgeContent="9" type="success">
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="9" type="warning">
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" badgeContent="9" type="danger">
              <Button>1233</Button>
            </Badges>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">只有点</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Badges dot={true}>
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" dot={true} bgColor="pink">
              <Button>1233</Button>
            </Badges>
            <Badges className="m-l-20" dot={true} bgColor="#ff0055">
              <Button>1233</Button>
            </Badges>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

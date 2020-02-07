import * as React from 'react'
import { BackTop, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  return (
    <div className="bg-grey h-full">
      <h1>- 回到顶部</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <p className="text-content">效果在右下角，滚动页面展示隐藏</p>
            <BackTop />
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">关闭动画</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <p className="text-content">效果在右下角，滚动页面展示隐藏</p>
            <BackTop style={{ bottom: '100px' }} animat={false} />
          </Foldcard>
        </div>
      </div>
      <div className="bg-yellow p-100 m-t-100">
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
      </div>
      <div className="bg-white p-100 m-t-100">
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
        <h1>占位显示BackTop</h1>
      </div>
    </div>
  )
}

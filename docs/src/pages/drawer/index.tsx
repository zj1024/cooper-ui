import * as React from 'react'
import { useState } from 'react'
import { Button, Drawer, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic, bgDrawer, noneMaskDrawer, maskCloseDrawer } from './example'
export default () => {
  const [leftVisible, setLeftVisible] = useState(false)
  const [rightVisible, setRightVisible] = useState(false)
  const [topVisible, setTopVisible] = useState(false)
  const [bottomVisible, setBottomVisible] = useState(false)
  const [leftBgVisible, setLeftBgVisible] = useState(false)
  const [leftMaskVisible, setLeftMaskVisible] = useState(false)
  const [leftMaskCloseVisible, setLeftMaskCloseVisible] = useState(false)
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">基础用法</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Button onClick={() => setLeftVisible(true)}>左边弹出</Button>
            <Button className="m-l-10" onClick={() => setRightVisible(true)}>
              右边弹出
            </Button>
            <Button className="m-l-10" onClick={() => setTopVisible(true)}>
              顶部弹出
            </Button>
            <Button className="m-l-10" onClick={() => setBottomVisible(true)}>
              底部弹出
            </Button>
            <Drawer visible={leftVisible} direction="left">
              <>
                <div>Hello Drawer Left</div>
                <Button onClick={() => setLeftVisible(false)}>关闭</Button>
              </>
            </Drawer>
            <Drawer visible={rightVisible} direction="right">
              <>
                <div>Hello Drawer Right</div>
                <Button onClick={() => setRightVisible(false)}>关闭</Button>
              </>
            </Drawer>
            <Drawer visible={topVisible} direction="top">
              <>
                <div>Hello Drawer Top</div>
                <Button onClick={() => setTopVisible(false)}>关闭</Button>
              </>
            </Drawer>
            <Drawer visible={bottomVisible} direction="bottom">
              <>
                <div>Hello Drawer Bottom</div>
                <Button onClick={() => setBottomVisible(false)}>关闭</Button>
              </>
            </Drawer>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">设置背景颜色</h2>
          <Foldcard fold={<Codebox source={bgDrawer} />} foldName="展开代码">
            <Button onClick={() => setLeftBgVisible(true)}>自定义背景</Button>
            <Drawer visible={leftBgVisible} contentBackground="#000" zIndex={1002}>
              <>
                <div className="text-white">黑色背景</div>
                <Button onClick={() => setLeftBgVisible(false)}>关闭</Button>
              </>
            </Drawer>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">无遮罩层</h2>
          <Foldcard fold={<Codebox source={noneMaskDrawer} />} foldName="展开代码">
            <Button onClick={() => setLeftMaskVisible(true)}>无遮罩层</Button>
            <Drawer visible={leftMaskVisible} mask={false} contentBackground="#188eee">
              <>
                <div className="text-white">无遮罩层</div>
                <Button onClick={() => setLeftMaskVisible(false)}>关闭</Button>
              </>
            </Drawer>
          </Foldcard>
        </div>
        <div className="w-p-48">
          <h2 className="text-content">遮罩层点击可关闭</h2>
          <Foldcard fold={<Codebox source={maskCloseDrawer} />} foldName="展开代码">
            <Button onClick={() => setLeftMaskCloseVisible(true)}>遮罩层点击可关闭</Button>
            <Drawer
              visible={leftMaskCloseVisible}
              onMaskClose={() => setLeftMaskCloseVisible(false)}>
              <>
                <div>遮罩层点击可关闭</div>
                <Button onClick={() => setLeftBgVisible(true)}>自定义背景</Button>
                <Button onClick={() => setLeftMaskCloseVisible(false)}>关闭</Button>
              </>
            </Drawer>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

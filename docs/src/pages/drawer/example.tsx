export const basic = `import React from "react";
import { useState } from "react";
import { Button, Drawer } from "cooper-ui";
export default () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);
  return (
    <div>
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
    </div>
  );
};
`

export const bgDrawer = `import React from 'react'
import { useState } from 'react'
import { Button, Drawer } from 'cooper-ui'
export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button onClick={() => setVisible(true)}>自定义背景</Button>

      <Drawer visible={visible} contentBackground="#000">
        <>
          <div className="text-white">黑色背景</div>
          <Button onClick={() => setVisible(false)}>关闭</Button>
        </>
      </Drawer>
    </div>
  )
}`

export const noneMaskDrawer = `import React from 'react'
import { useState } from 'react'
import { Button, Drawer } from 'cooper-ui'
export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button onClick={() => setVisible(true)}>无遮罩层</Button>

      <Drawer visible={visible} mask={false} contentBackground="#188eee">
        <>
          <div className="text-white">无遮罩层</div>
          <Button onClick={() => setVisible(false)}>关闭</Button>
        </>
      </Drawer>
    </div>
  )
}`

export const maskCloseDrawer = `import React from 'react'
import { useState } from 'react'
import { Button, Drawer } from 'cooper-ui'
export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button onClick={() => setVisible(true)}>遮罩层点击可关闭</Button>

      <Drawer visible={visible} onMaskClose={() => setVisible(false)}>
        <>
          <div>遮罩层点击可关闭</div>
          <Button onClick={() => setVisible(false)}>关闭</Button>
        </>
      </Drawer>
    </div>
  )
}`

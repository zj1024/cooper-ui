export const basic = `import React from 'react'
import { Button, Message } from 'cooper-ui'
export default () => {
  const onOpenMessage = () => {
    Message.$success({ message: '消息提示' })
  }
  return <Button onClick={onOpenMessage}>提示</Button>
}`

export const showClose = `import React from 'react'
import { Button, Message } from 'cooper-ui'
export default () => {
  const onOpenMessage = () => {
    Message.$success({ message: '消息提示', showClose: true })
  }
  return <Button onClick={onOpenMessage}>提示</Button>
}`

export const openBottom = `import React from 'react'
import { Button, Message } from 'cooper-ui'
export default () => {
  const onOpenMessage = () => {
    const tips = Message.$success({ message: '消息提示', showClose: true, placement: 'bottom', duration: 0 })
  }
  return <Button onClick={onOpenMessage}>提示</Button>
}`

export const fnClose = `import React from 'react'
import { Button, Message } from 'cooper-ui'
export default () => {
  const onOpenMessage = () => {
    const tips = Message.$success({ message: '消息提示', placement: 'bottom', duration: 0 })
    setTimeout(() => {
      tips.close()
    }, 1500)
  }
  return <Button onClick={onOpenMessage}>提示</Button>
}`

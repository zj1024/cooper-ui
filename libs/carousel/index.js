/** @jsx createElement */
import { createElement, useState, useEffect } from 'rax'
import View from 'rax-view'
import Link from 'rax-link'
import Text from 'rax-text'

import styles from './index.css'

const scrollTtile = props => {
  const { list = [], config = {} } = props

  const { duration = 1000, needLink = true } = config

  const [curIndex, setCurIndex] = useState(0)
  const [timerCount, setTimerCount] = useState(0) //滚动次数，超过100次不再滚动
  const SCROLL_HEIGHT = 37
  const TRANSITION_TIME = 1000
  const MAX_SCROLLTIMES = 100

  useEffect(() => {
    //防止第一个文案停留过久
    let fitstTimer = setInterval(() => {
      let cidx = curIndex
      cidx++
      if (cidx > list.length - 1) {
        cidx = 0
      }
      setCurIndex(cidx)
      clearInterval(fitstTimer)
    }, duration - TRANSITION_TIME)
  }, [])

  useEffect(() => {
    if (timerCount >= MAX_SCROLLTIMES) {
      return
    }
    let timer = setInterval(() => {
      let cidx = curIndex
      cidx++
      if (cidx > list.length - 1) {
        cidx = 0
      }
      setTimerCount(timerCount + 1)
      setCurIndex(cidx)
    }, duration)
    return () => {
      clearInterval(timer)
    }
  })

  const getOffset = idx => {
    let top = SCROLL_HEIGHT
    let opacity = 0
    if (idx === curIndex) {
      top = 0
      opacity = 1
    }
    if (idx === curIndex - 1 || (idx === list.length - 1 && curIndex === 0)) {
      top = -SCROLL_HEIGHT
    }
    return { top, opacity }
  }

  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        let { top, opacity } = getOffset(index)

        return (
          <Title
            key={item.text + '-' + index}
            top={top}
            opacity={opacity}
            title={item.text}
            url={item.linkUrl}
            needLink={needLink}></Title>
        )
      })}
    </View>
  )
}
const Title = props => {
  const { top, key, title, url, opacity, needLink } = props
  if (needLink) {
    return (
      <Link key={key} style={{ ...styles.listItem, top: top, opacity: opacity }} href={url}>
        <Text numberOfLines={1} style={{ ...styles.itemText }}>
          {title}
        </Text>
      </Link>
    )
  } else {
    return (
      <View key={key} style={{ ...styles.listItem, top: top, opacity: opacity }}>
        <Text numberOfLines={1} style={styles.itemText}>
          {title}
        </Text>
      </View>
    )
  }
}
export default scrollTtile

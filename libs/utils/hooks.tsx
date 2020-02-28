import { useRef, useEffect } from 'react'

export const useInterval = (callback: (params: any) => any, delay: number) => {
  const savedCallback = useRef()

  // 保存新回调
  useEffect(() => {
    ;(savedCallback as any).current = callback
  })

  // 建立 interval
  useEffect(() => {
    const tick = () => {
      ;(savedCallback as any).current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
    return
  }, [delay])
}

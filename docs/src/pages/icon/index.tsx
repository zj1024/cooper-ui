import * as React from 'react'
import { Icon } from '../../../../libs'

export default () => {
  return (
    <div>
      <h1>- Icon</h1>
      <div className="flex a-center">
        <Icon name="hint" className="fs-14" />
        <Icon name="eyes" className="fs-20" />
        <Icon name="correct" className="fs-30" />
        <Icon name="message" className="fs-40" />
        <Icon name="share" className="fs-50" />
      </div>
    </div>
  )
}

import * as React from 'react'
import { Foldcard } from '../../../../components'

export default () => {
  return (
    <div>
      <h1>- Foldcard</h1>
      <div className="p-20">
        <Foldcard fold={<h1>1234</h1>} foldName={'查看代码'}>
          this is content
        </Foldcard>
      </div>
    </div>
  )
}

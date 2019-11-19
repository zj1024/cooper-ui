import * as React from 'react'
import { Foldcard } from '../../../../libs'

export default () => {
  // const foldcardClose = (spread: any) => {
  //   spread()
  // }
  return (
    <div>
      <h1>- Foldcard</h1>
      <div className="p-20">
        <Foldcard fold={<h1>1234</h1>}>this is content</Foldcard>
      </div>
    </div>
  )
}

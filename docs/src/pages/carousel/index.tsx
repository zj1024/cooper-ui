import * as React from 'react'
import Carousel from '../../../../libs/carousel'

export default () => {
  return (
    <>
      <Carousel defaultActive={0} dots={true} arrow="always">
        <div className="h-200 flex j-center a-center bg-blue">0</div>
        <div className="h-200 flex j-center a-center bg-yellow">1</div>
        <div className="h-200 flex j-center a-center bg-red">2</div>
      </Carousel>
    </>
  )
}

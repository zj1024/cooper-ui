import * as React from 'react'
import Carousel from '../../../../libs/carousel'

export default () => {
  return (
    <>
      <Carousel defaultActive={1}>
        <div className="h-200 flex j-center a-center bg-blue">1</div>
        <div className="h-200 flex j-center a-center bg-yellow">2</div>
        <div className="h-200 flex j-center a-center bg-red">3</div>
      </Carousel>
    </>
  )
}

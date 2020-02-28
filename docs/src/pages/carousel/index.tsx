import * as React from 'react'
import Carousel from '../../../../libs/carousel'

export default () => {
  return (
    <>
      <Carousel defaultActive={1} dots={true} arrow="always" duration={2000} autoplay={false}>
        <div className="h-200 flex j-center a-center bg-blue">0</div>
        <div className="h-200 flex j-center a-center bg-yellow">1</div>
        <div className="h-200 flex j-center a-center bg-red">2</div>
      </Carousel>

      <Carousel defaultActive={0} dots={true} arrow="hover" className="m-t-20" duration={1000}>
        <div className="h-200 flex j-center a-center bg-blue">0</div>
        <div className="h-200 flex j-center a-center bg-yellow">1</div>
        <div className="h-200 flex j-center a-center bg-red">2</div>
      </Carousel>

      <Carousel defaultActive={1} dots={true} arrow="never" className="m-t-20" duration={3000}>
        <div className="h-200 flex j-center a-center bg-blue">0</div>
        <div className="h-200 flex j-center a-center bg-yellow">1</div>
        <div className="h-200 flex j-center a-center bg-red">2</div>
      </Carousel>

      <Carousel
        defaultActive={2}
        dots={true}
        arrow="always"
        className="m-t-20"
        duration={500}
        autoplay={false}>
        <div className="h-200 flex j-center a-center bg-blue">0</div>
        <div className="h-200 flex j-center a-center bg-yellow">1</div>
        <div className="h-200 flex j-center a-center bg-red">2</div>
      </Carousel>
    </>
  )
}

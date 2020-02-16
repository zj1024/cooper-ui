import * as React from 'react'
import { Pagination, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const handleChange = (page: number) => {
    console.log(page)
  }
  return (
    <div className="h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div>
              <Pagination pageCount={1} onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination defaultCurrent={3} pageCount={50} onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination size="small" pageCount={6} onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                size="large"
                defaultCurrent={2999}
                pageCount={50000}
                showQuickJumper={true}
                onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                pageCount={50}
                disabled={true}
                onChange={handleChange}
                showQuickJumper={true}></Pagination>
            </div>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

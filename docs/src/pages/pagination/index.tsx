import * as React from 'react'
import { Pagination, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const handleChange = (page: number) => {
    console.log(page)
  }
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <div>
              <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                pageCount={50}
                onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={5}
                pageCount={50}
                onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                size="small"
                defaultCurrent={1}
                defaultPageSize={5}
                pageCount={50}
                onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                size="large"
                defaultCurrent={1}
                defaultPageSize={5}
                pageCount={50}
                onChange={handleChange}></Pagination>
            </div>
            <div>
              <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                pageCount={50}
                disabled={true}
                onChange={handleChange}></Pagination>
            </div>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}
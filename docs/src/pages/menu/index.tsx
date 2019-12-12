import * as React from 'react'
import { Menu, Foldcard } from '../../../../libs'
import Codebox from '../../components/codebox'
import { basic } from './example'

export default () => {
  const { MenuItem, SubMenu } = Menu
  const onSelect = (index: any) => {
    console.log(index)
  }
  return (
    <div className="bg-grey h-full">
      <h1>- </h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">上中下布局</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Menu activeIndex="2" onSelect={onSelect}>
              <MenuItem index="1">导航1</MenuItem>
              <MenuItem index="2">导航2</MenuItem>
              <MenuItem index="3">导航3</MenuItem>
              <MenuItem index="4">导航4</MenuItem>
              <SubMenu index="5" title="导航">
                <MenuItem index="6">
                  <a href="https://baidu.com">百度</a>
                </MenuItem>
                <MenuItem index="7">submenu2</MenuItem>
                <MenuItem index="8">submenu3</MenuItem>
              </SubMenu>
            </Menu>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

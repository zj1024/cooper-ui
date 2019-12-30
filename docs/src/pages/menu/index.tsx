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
      <h1>导航</h1>
      <div className="flex j-between">
        <div className="w-p-48">
          <h2 className="text-content">click</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Menu activeIndex="101" onSelect={onSelect} align="left" trigger="click">
              <MenuItem index="1">MenuItem1</MenuItem>
              <SubMenu index="5" title="测试文本">
                <MenuItem index="6">MenuItem6</MenuItem>
                <MenuItem index="7">MenuItem7</MenuItem>
                <MenuItem index="8">MenuItem8</MenuItem>
              </SubMenu>
              <SubMenu index="100" title="导航">
                <MenuItem index="101">MenuItem101</MenuItem>
                <MenuItem index="102">MenuItem102</MenuItem>
                <MenuItem index="103">MenuItem103</MenuItem>
              </SubMenu>
            </Menu>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">hover</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Menu activeIndex="101" onSelect={onSelect} align="left" trigger="hover">
              <MenuItem index="1">MenuItem1</MenuItem>
              <SubMenu index="5" title="测试文本">
                <MenuItem index="6">MenuItem6</MenuItem>
                <MenuItem index="7">MenuItem7</MenuItem>
                <MenuItem index="8">MenuItem8</MenuItem>
              </SubMenu>
              <SubMenu index="100" title="导航">
                <MenuItem index="101">MenuItem101</MenuItem>
                <MenuItem index="102">MenuItem102</MenuItem>
                <MenuItem index="103">MenuItem103</MenuItem>
              </SubMenu>
            </Menu>
          </Foldcard>
        </div>
      </div>

      <div className="flex j-between m-t-50">
        <div className="w-p-48">
          <h2 className="text-content">click</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Menu activeIndex="101" onSelect={onSelect} align="left" trigger="click">
              <MenuItem index="1">MenuItem1</MenuItem>
              <SubMenu index="5" title="测试文本">
                <MenuItem index="6">MenuItem6</MenuItem>
                <MenuItem index="7">MenuItem7</MenuItem>
                <MenuItem index="8">MenuItem8</MenuItem>
              </SubMenu>
              <SubMenu index="100" title="导航">
                <MenuItem index="101">MenuItem101</MenuItem>
                <MenuItem index="102">MenuItem102</MenuItem>
                <MenuItem index="103">MenuItem103</MenuItem>
              </SubMenu>
            </Menu>
          </Foldcard>
        </div>

        <div className="w-p-48">
          <h2 className="text-content">垂直导航</h2>
          <Foldcard fold={<Codebox source={basic} />} foldName="展开代码">
            <Menu
              activeIndex="101"
              onSelect={onSelect}
              align="left"
              trigger="click"
              mode="vertical">
              <MenuItem index="1">MenuItem1</MenuItem>
              <SubMenu index="5" title="测试文本">
                <MenuItem index="6">MenuItem6</MenuItem>
                <MenuItem index="7">MenuItem7</MenuItem>
                <MenuItem index="8">MenuItem8</MenuItem>
              </SubMenu>
              <SubMenu index="100" title="导航">
                <MenuItem index="101">MenuItem101</MenuItem>
                <MenuItem index="102">MenuItem102</MenuItem>
                <MenuItem index="103">MenuItem103</MenuItem>
              </SubMenu>
            </Menu>
          </Foldcard>
        </div>
      </div>
    </div>
  )
}

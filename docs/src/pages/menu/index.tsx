import * as React from 'react'
import { Menu } from '../../../../libs'

export default () => {
  const { MenuItem, SubMenu } = Menu
  const onSelect = (index: any) => {
    console.log(index)
  }
  return (
    <div className="h-full">
      <div className="m-t-30">
        <Menu activeIndex="101" onSelect={onSelect} align="left" trigger="click">
          <MenuItem index="1">
            <a href="https://zj1024.com" target="_blank">
              ZJ1024
            </a>
          </MenuItem>
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
      </div>
      <div className="m-t-30">
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
      </div>

      <div className="m-t-30">
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
      </div>
      <div className="m-t-30">
        <Menu activeIndex="101" onSelect={onSelect} align="left" trigger="click" mode="vertical">
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
      </div>
    </div>
  )
}

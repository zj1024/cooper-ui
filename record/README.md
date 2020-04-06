# 造轮子中的一些记录

## 出现的问题

- 项目打包速度过慢
- yarn build 声明文件出现在 test 目录和 docs 下的所有目录下

- message
  多个弹窗同时出现，为了避免视觉干扰，将最后出现的向下移动，先出现的先消失，后面的弹窗进行补位
  技术上，先要判断是否有父组件 coo-message-wrapper, 有的话直接 append 到父组件，否则就创建并插入到 body 里

## 约定

### z-index

dialog: content: 1001 mask: 1000
message: content: 1002
drawer: children 1001 mask: 1001
popover: children: 2 content: 3 icon: 1
tooltip: children: 2 content: 3 icon: 1

## blog

### 2019.12.15 factor

- badges 注释优化 变量排序 支持传入其他 props
- card 注释优化 变量排序 支持传入其他 props
- collapse 注释优化 变量排序
- button docs 注释优化 变量排序
- dialog 注释优化 变量排序 功能优化
- drawer

### 2019.12.24

- image
- switch
- slider
- switch

refactor:

- docs 改造

1. readme 支持
2. 整体布局优化

### 2020.2.17

遇到的两个问题

- table 不能 scroll
- codebox， code 不能 scroll

### 2020.2.23

新增组件

- slider 滑块
- datepicker 日期选择器
- tag 标签

## 第一次使用-毕设-优化点

Input ref - done

分页第一次会 onChange 执行逻辑 - done 设置了 firstload

Select value.includes 字符串问题 - done value 强制转换成字符串

Select defaultValue 不显示问题 - done 全部显示 label

TextLink a 标签不兼容问题 - done 设置了 tag \_extends 函数

Select 点击 disabled 后再点击 body 不会收回

Message 组件会造成页面 translateY 抖动 - 添加 translateY(0)

InputGroup 对于 size 兼容情况

Backtop 组件 effect 没有清除

# 造轮子中的一些记录

> 进度 05

> 进度 03 02:53

> 出现的问题

- 项目打包速度过慢
- yarn build 声明文件出现在 test 目录和 docs 下的所有目录下

- message
  多个弹窗同时出现，为了避免视觉干扰，将最后出现的向下移动，先出现的先消失，后面的弹窗进行补位
  技术上，先要判断是否有父组件 coo-message-wrapper, 有的话直接 append 到父组件，否则就创建并插入到 body 里

# z-index

dialog: content: 1001 mask: 1000
message: content: 1002
drawer: children 1001 mask: 1001
popover: children: 2 content: 3 icon: 1
tooltip: children: 2 content: 3 icon: 1

# Popover 弹出框

用于在元素边缘显示某些内容。

## 基本用法

:::demo 使用`<Popover></Popover>`标签声明组件，在标签内写作用到的元素，在`content`属性上设置 popover 上的内容，通过`placement`属性设置 popover 内容的展示位置

```jsx
const App = () => {
  return (
    <div style={styles.wrapper}>
      <Popover style={styles.mr10} placement="top" content="这是一段文本">
        <Button>顶部显示</Button>
      </Popover>
      <Popover style={styles.mr10} placement="bottom" content="这是一段文本">
        <Button type="primary">底部显示</Button>
      </Popover>
      <Popover style={styles.right} placement="right" content="这是一段文本">
        <Button type="success">右边显示</Button>
      </Popover>
      <Popover style={styles.mr10} placement="left" content="这是一段文本">
        <Button type="info">左边显示</Button>
      </Popover>
    </div>
  )
}

const styles = {
  wrapper: {
    marginTop: '40px',
  },
  right: {
    marginRight: '120px',
  },
  mr10: {
    marginRight: '10px',
  },
}
```

:::

## 嵌套 dom

:::demo 使用`<Popover></Popover>`标签声明组件，在`content`属性直接使用 jsx

```jsx
const App = () => {
  return (
    <div>
      <Popover placement="right" content={<Button>按钮</Button>}>
        <Button type="info">嵌套一个button</Button>
      </Popover>
    </div>
  )
}
```

:::

## 触发方式

:::demo 使用`<Popover></Popover>`标签声明组件，`trigger`属性声明触发方式，支持 hover | click | contextMenu

```jsx
const App = () => {
  return (
    <div style={styles.wrapper} trigger="hover">
      <Popover trigger="hover" style={styles.mr10} placement="top" content={'文本内容'}>
        <Button>hover</Button>
      </Popover>

      <Popover trigger="click" style={styles.mr10} placement="top" content={'文本内容'}>
        <Button type="success">click</Button>
      </Popover>

      <Popover trigger="contextMenu" placement="top" content={'文本内容'}>
        <Button type="info">右键</Button>
      </Popover>
    </div>
  )
}

const styles = {
  wrapper: {
    marginTop: '40px',
  },
  mr10: {
    marginRight: '10px',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型            | 可选值                    | 默认值 |
| --------- | -------------- | --------------- | ------------------------- | ------ |
| className | 容器 className | string          | —                         | —      |
| style     | 指定样式       | object          | —                         | —      |
| placement | 显示位置       | string          | top, bottom, left, right  | top    |
| trigger   | 触发方式       | string          | hover, click, contextMenu | hover  |
| content   | 内容           | React.ReactNode | -                         | -      |

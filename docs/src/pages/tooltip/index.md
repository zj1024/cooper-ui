# Tooltip 文字提示

用户鼠标悬浮，会显示简单的文字提示气泡框。

## 基本用法

提供了`top / bottom / left / right`四种方向。气泡浮层支持长文本和简单文本，不承载复杂操作。

:::demo 使用`<Tooltip />`标签声明组件，`children`为触发元素，`content`属性为气泡内容，`placement`属性为气泡方向

```jsx
const App = () => {
  return (
    <div style={styles.ph100}>
      <div style={styles.item}>
        <Tooltip content="666">
          <Button>上</Button>
        </Tooltip>
      </div>
      <div style={styles.center}>
        <Tooltip content="666" placement="left">
          <Button type="info">左</Button>
        </Tooltip>
        <Tooltip content="666" placement="right">
          <Button type="success">右</Button>
        </Tooltip>
      </div>
      <div style={styles.item}>
        <Tooltip content="666" placement="bottom">
          <Button type="primary">下</Button>
        </Tooltip>
      </div>
    </div>
  )
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  center: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
  },
  ph100: {
    paddingLeft: '100px',
    paddingRight: '100px',
  },
}
```

:::

## 长文本

在基本用法上属性一致，同时也支持长文本

:::demo 使用`<Tooltip />`标签声明组件，`content`属性为气泡内容，放置一段长文本

```jsx
const App = () => {
  return (
    <Tooltip content="这是一段长文本，文本内容可以很好的显示出来" placement="right">
      <Button>长文本</Button>
    </Tooltip>
  )
}
```

:::

## Attributes

| 参数      | 说明           | 类型   | 可选值                   | 默认值 |
| --------- | -------------- | ------ | ------------------------ | ------ |
| className | 容器 className | string | —                        | —      |
| style     | 指定样式       | object | —                        | —      |
| content   | 文字内容       | string | -                        | -      |
| placement | 方向           | string | top，bottom，left，right | -      |

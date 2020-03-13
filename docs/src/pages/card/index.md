# Card 卡片

卡片用来承载内容

## 基本用法

:::demo 使用`<Card />`标签声明组件，通过`header`属性设置头部，`footer`设置尾部，`children`设置卡片内容

```jsx
const App = () => {
  return (
    <div style={styles.wrapper}>
      <Card header={<div>Card Title</div>} footer={<div>尾部</div>}>
        {[1, 2, 3, 4].map(d => (
          <div key={d} style={styles.content}>
            卡片呈现文本内容{d}
          </div>
        ))}
      </Card>
    </div>
  )
}

const styles = {
  wrapper: {
    maxWidth: '500px',
  },
  content: {
    margin: '20px 0',
  },
}
```

:::

## 自定义阴影

:::demo 使用`<Card />`标签声明组件，通过`shadow`属性设置阴影的显示，`shadow=always`阴影一直存在，`shadow=hover`鼠标移上去显示阴影，`shadow=never`不显示阴影，默认是`always`

```jsx
const App = () => {
  return (
    <div>
      <div style={styles.wrapper}>
        <Card>
          {[1, 2, 3, 4].map(d => (
            <div key={d} style={styles.content}>
              卡片呈现文本内容{d}
            </div>
          ))}
        </Card>
      </div>
      <div style={styles.wrapper}>
        <Card shadow="hover">
          {[1, 2, 3, 4].map(d => (
            <div key={d} style={styles.content}>
              卡片呈现文本内容{d}
            </div>
          ))}
        </Card>
      </div>
      <div style={styles.wrapper}>
        <Card shadow="never">
          {[1, 2, 3, 4].map(d => (
            <div key={d} style={styles.content}>
              卡片呈现文本内容{d}
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    maxWidth: '500px',
    marginBottom: '20px',
  },
  content: {
    margin: '20px 0',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型            | 可选值               | 默认值 |
| --------- | -------------- | --------------- | -------------------- | ------ |
| className | 容器 className | string          | —                    | —      |
| style     | 指定样式       | object          | —                    | —      |
| header    | 头部内容       | React.ReactNode | -                    | -      |
| footer    | 尾部内容       | React.ReactNode | -                    | -      |
| shadow    | 阴影显示       | string          | always, hover, never | always |

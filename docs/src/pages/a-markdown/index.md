# Icon 图标

仅提供了`cooper-ui`用到的图标

支持并建议使用自定义图标库：<a href="https://www.iconfont.cn/" target="_blank">Iconfont</a>

## 基本用法

图标仅提供了组件库使用到的图标，推荐使用自定义用法

:::demo 使用`<Icon />`标签声明组件，通过`name`属性设置对应的 icon

```jsx
const App = () => {
  return (
    <div>
      <Icon name="arrow-down" style={styles.item} />
      <Icon name="arrow-left" style={styles.item} />
      <Icon name="arrow-right" style={styles.item} />
      <Icon name="arrow-up" style={styles.item} />
      <Icon name="close" style={styles.item} />
      <Icon name="correct" style={styles.item} />
      <Icon name="double-left" style={styles.item} />
      <Icon name="double-right" style={styles.item} />
      <Icon name="down" style={styles.item} />
      <Icon name="ellipsis" style={styles.item} />
      <Icon name="error" style={styles.item} />
      <Icon name="eyes" style={styles.item} />
      <Icon name="hint" style={styles.item} />
      <Icon name="info" style={styles.item} />
      <Icon name="loading-rotate" style={styles.item} />
      <Icon name="loading-spot" style={styles.item} />
      <Icon name="loading" style={styles.item} />
      <Icon name="message" style={styles.item} />
      <Icon name="share" style={styles.item} />
      <Icon name="success" style={styles.item} />
      <Icon name="warning" style={styles.item} />
    </div>
  )
}

const styles = {
  item: {
    margin: '0 18px',
    color: '#555',
    fontSize: '30px',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| --------- | -------------- | ------ | ------ | ------ |
| className | 容器 className | string | —      | —      |
| style     | 指定样式       | object | —      | —      |
| name      | 图标名称       | string | -      | -      |
| component | svg 字符串     | string | -      | -      |

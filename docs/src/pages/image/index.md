# Image 图片

## 基本用法

图标仅提供了组件库使用到的图标，推荐使用自定义用法

:::demo 使用`<Icon />`标签声明组件，通过`name`属性设置对应的 icon

```jsx
const App = () => {
  return <div></div>
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
| className | 容器 className | string | -      | -      |
| style     | 指定样式       | object | -      | -      |
| name      | 图标名称       | string | -      | -      |
| component | svg 字符串     | string | -      | -      |

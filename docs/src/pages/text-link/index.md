# TextLink 文字链接

基于 a 标签扩展，在 a 标签基础上增加功能

## 基本用法

:::demo 使用`<TextLink />`标签声明组件，通过`disabled`属性设置禁用态，通过`underline`设置下划线

```jsx
const App = () => {
  return (
    <div>
      <TextLink style={styles.mr20} type="default" disabled={true}>
        链接
      </TextLink>
      <TextLink style={styles.mr20} type="primary" underline={false}>
        链接
      </TextLink>
      <TextLink style={styles.mr20} type="success">
        链接
      </TextLink>
      <TextLink style={styles.mr20} type="warning">
        链接
      </TextLink>
      <TextLink style={styles.mr20} type="danger">
        链接
      </TextLink>
      <TextLink style={styles.mr20} type="info">
        链接
      </TextLink>
    </div>
  )
}

const styles = {
  mr20: {
    marginRight: '20px',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                                           | 默认值  |
| --------- | -------------- | ------- | ------------------------------------------------ | ------- |
| className | 容器 className | string  | —                                                | —       |
| style     | 指定样式       | object  | —                                                | —       |
| type      | 类型           | string  | default，primary，success，warning，danger，info | default |
| underline | 图标名称       | boolean | -                                                | true    |
| disabled  | 图标名称       | boolean | -                                                | false   |

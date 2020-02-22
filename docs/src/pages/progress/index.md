# Progress 进度条

进度条能够将当前处理过程的状态通知用户。

## 基本用法

默认的进度条使用的是主题色，无尽状态。

:::demo 使用`<Progress />`标签声明组件，通过`color`属性设置进度条的颜色，同 css`background`设置颜色。通过`percent`设置为具体的进度。

```jsx
const App = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.item}>
        <Progress />
        <Progress color="rgba(172,32,187,.7)" />
        <Progress color="linear-gradient(to right, yellow, blue)" />
      </div>
      <div style={styles.item}>
        <Progress percent={30} />
        <Progress percent={60} />
        <Progress percent={100} />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
  },
  item: {
    width: '50%',
    padding: '20px',
  },
}
```

:::

## 成功 / 失败态

支持设置进度条加载成功或失败状态

:::demo 使用`<Progress />`标签声明组件，通过`status`属性设置进度条的状态。

```jsx
const App = () => {
  return (
    <div>
      <Progress percent={50} status={null} />
      <Progress status="success" />
      <Progress status="error" />
    </div>
  )
}
```

:::

## Attributes

| 参数      | 说明           | 类型   | 可选值                    | 默认值 |
| --------- | -------------- | ------ | ------------------------- | ------ |
| className | 容器 className | string | —                         | —      |
| style     | 指定样式       | object | —                         | —      |
| color     | 颜色           | string | 同 css 的 background 属性 | -      |
| percent   | 进度           | number | 0-100                     | -      |
| status    | 状态           | string | error，success，null      | null   |

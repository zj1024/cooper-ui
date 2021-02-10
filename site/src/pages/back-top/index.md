# BackTop 回到顶部

页面高度过高可以一键回到顶部

## 基本用法

:::demo 使用`<BackTop />`标签声明组件，通过`target`属性设置滚动容器对应的 DOM，`animat`属性控制显示/隐藏时的动画

```jsx
const App = () => {
  const handleTarget = () => document.querySelector('.main')

  return (
    <div>
      <p>向下滚动</p>
      <BackTop target={handleTarget} />
      <BackTop style={{ bottom: '100px' }} animat={false} target={handleTarget} />
    </div>
  )
}
```

:::

## 自定义内容

:::demo 使用`<BackTop />`标签声明组件，通过`children`设置自定义内容

```jsx
const App = () => {
  const handleTarget = () => document.querySelector('.main')

  return (
    <div>
      <p>向下滚动</p>
      <BackTop style={{ bottom: '150px' }} target={handleTarget}>
        <Icon name="arrow-up" />
      </BackTop>
    </div>
  )
}
```

:::

## Attributes

| 参数             | 说明                                   | 类型            | 可选值       | 默认值       |
| ---------------- | -------------------------------------- | --------------- | ------------ | ------------ |
| className        | 容器 className                         | string          | -            | -            |
| style            | 指定样式                               | object          | -            | -            |
| children         | 自定义内容                             | React.ReactNode | -            | -            |
| behavior         | 回到顶部行为                           | string          | smooth，auto | smooth       |
| visibilityHeight | 距离底部多少高度显示                   | number          | -            | 400          |
| animat           | 显示/隐藏动画                          | boolean         | -            | true         |
| target           | 需要监听滚动容器的 DOM，函数，返回 DOM | () => targetDOM | -            | () => window |

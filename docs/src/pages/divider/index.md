# Divider 分割线

用于内容之间区分

## 基本用法

:::demo 使用`<Divider />`标签声明组件，`dashed`属性为 true 时虚线显示

```jsx
const App = () => {
  return (
    <div>
      <p>美丽的分割线 Cooper UI</p>
      <Divider />
      <p>美丽的分割线 Cooper UI</p>
      <Divider dashed={true} />
    </div>
  )
}
```

:::

## 附加文字

:::demo 使用`<Divider />`标签声明组件，`children`放置分割线上的提示文字，`orientation`属性配置文字的位置，提供了`left`、`center`、`right`，默认是 center

```jsx
const App = () => {
  return (
    <div>
      <p>美丽的分割线 Cooper UI</p>
      <Divider orientation="left">我是有底线的</Divider>
      <p>美丽的分割线 Cooper UI</p>
      <Divider>我是有底线的</Divider>
      <p>美丽的分割线 Cooper UI</p>
      <Divider orientation="right">我是有底线的</Divider>
    </div>
  )
}
```

:::

## 纵向分割线

常用于文字之间的分割

:::demo 使用`<Divider />`标签声明组件，`type`属性设置为`vertical`

```jsx
const App = () => {
  return (
    <div>
      <p>
        美丽的分割线 Cooper UI
        <Divider type="vertical" />
        美丽的分割线 Cooper UI
        <Divider type="vertical" />
        美丽的分割线 Cooper UI
      </p>
    </div>
  )
}
```

:::

## Attributes

| 参数        | 说明           | 类型    | 可选值                | 默认值     |
| ----------- | -------------- | ------- | --------------------- | ---------- |
| className   | 容器 className | string  | -                     | -          |
| style       | 指定样式       | object  | -                     | -          |
| dashed      | 图标名称       | boolean | -                     | -          |
| orientation | 文字方向       | string  | left，center，right   | center     |
| type        | 类型           | string  | horizontal， vertical | horizontal |

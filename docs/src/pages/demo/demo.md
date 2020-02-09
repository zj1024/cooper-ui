## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```js
const App = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  )
}
```

:::

### 最大值

可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```js
const App = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  )
}
```

:::

### 自定义内容

可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```js
const App = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  )
}
```

:::

### 小红点

以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`isDot`属性，它接受一个`Boolean`。

```js
const App = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="danger">按钮</Button>
    </div>
  )
}
```

:::

### Attributes

| 参数  | 说明                                                         | 类型           | 可选值 | 默认值 |
| ----- | ------------------------------------------------------------ | -------------- | ------ | ------ |
| value | 显示值                                                       | string, number | —      | —      |
| max   | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number         | —      | —      |
| isDot | 小圆点                                                       | boolean        | —      | false  |

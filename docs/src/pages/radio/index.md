# Radio 单选框

通过单选框从一组按钮中选择一个选项。

## 基本用法

默认的 Radio 组件通过 options 属性来控制，onChange 开获取选中态

:::demo 使用`<Radio />`标签声明组件，通过`options`属性设置单选按钮 label，`onChange`属性接收函数

```jsx
const App = () => {
  const [value, setValue] = React.useState('')
  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  const options = [
    {
      label: 'Harrison',
      value: 'Harrison',
    },
    {
      label: 'Jack',
      value: 'Jack',
    },
    {
      label: 'Barry',
      value: 'Barry',
    },
  ]
  return (
    <div>
      <Radio options={[...options]} onChange={onChange}></Radio>
      <span>选择了: {value}</span>
    </div>
  )
}
```

:::

## 纵向单选按钮组

配置了参数，纵向按钮组，默认第一个选中，设置按钮的下边距

:::demo 使用`<Radio />`标签声明组件，配置属性`mode="vertical"`，`defaultValue="Harrison"`，`radioStyle={{ marginBottom: '20px' }}`

```jsx
const App = () => {
  const [value, setValue] = React.useState('Harrison')
  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  const options = [
    {
      label: 'Harrison',
      value: 'Harrison',
    },
    {
      label: 'Jack',
      value: 'Jack',
    },
    {
      label: 'Barry',
      value: 'Barry',
    },
  ]
  return (
    <div>
      <Radio
        options={[...options]}
        onChange={onChange}
        mode="vertical"
        defaultValue="Harrison"
        radioStyle={{ marginBottom: '20px' }}></Radio>
      <span>选择了: {value}</span>
    </div>
  )
}
```

:::

## Attributes

| 参数         | 说明                 | 类型                                                                   | 可选值 | 默认值     |
| ------------ | -------------------- | ---------------------------------------------------------------------- | ------ | ---------- |
| className    | 容器 className       | string                                                                 | -      | -          |
| style        | 指定样式             | object                                                                 | -      | -          |
| radioStyle   | 单选框样式           | object                                                                 | -      | -          |
| options      | 单选框               | {value: any, label: string, disabled?: boolean, checked?: boolean, }[] | -      | -          |
| onChange     | 按钮状态变化接收函数 | (e) => {}                                                              | -      | -          |
| defaultValue | 默认选中             | any                                                                    | -      | -          |
| mode         | 单选框组方向         | vertical，horizontal                                                   | -      | horizontal |

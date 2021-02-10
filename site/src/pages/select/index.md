# Select 选择器

模拟 html select 标签，选项过多使用选择器选择内容。

## 基本用法

基础单选

:::demo

使用`<Select />`标签声明组件，通过`onChange`属性设置 Select 回调函数，`defaultValue`属性设置默认选中的值。

使用`<Select.Option />`标签声明选项，`label`属性默认展示文本， `value`默认为选中值，`disabled`设置选项禁用态。

```jsx
const App = () => {
  const [value, setValue] = React.useState('')

  return (
    <Select
      // data: {value: '', label: ''}
      onChange={data => setValue(data.value)}
      defaultValue={{ label: 'label1', value: 'value1' }}>
      <Select.Option label="label1" value="value1" />
      <Select.Option label="label2" value="value2" disabled />
      <Select.Option label="label3" value="value3" />
      <Select.Option label="label4" value="value4" disabled />
    </Select>
  )
}
```

:::

## 带搜索框

可以使用搜索功能快速查找选项

:::demo 使用`<Select />`标签声明组件，通过`showSearch`属性开启搜索功能。

```jsx
const App = () => {
  const [value, setValue] = React.useState('')

  return (
    <Select
      showSearch={true}
      // data: {value: '', label: ''}
      onChange={data => setValue(data.value)}
      defaultValue={{ label: 'label1', value: 'value1' }}>
      <Select.Option label="label1" value="value1" />
      <Select.Option label="label2" value="value2" disabled />
      <Select.Option label="label3" value="value3" />
      <Select.Option label="label4" value="value4" disabled />
    </Select>
  )
}
```

:::

## 配合 InputGroup 使用

可以添加插件展示文案

:::demo

```jsx
const App = () => {
  const [value, setValue] = React.useState('')

  return (
    <section>
      <div>
        <InputGroup>
          <InputAddon>选择器</InputAddon>
          <Select onChange={data => setValue(data.value)}>
            <Select.Option label="label1" value="value1" />
            <Select.Option label="label2" value="value2" disabled />
            <Select.Option label="label3" value="value3" />
            <Select.Option label="label4" value="value4" disabled />
          </Select>
        </InputGroup>
      </div>
      <div style={{ marginTop: '50px' }}>
        <InputGroup>
          <Select showSearch={true} onChange={data => setValue(data.value)}>
            <Select.Option label="label1" value="value1" />
            <Select.Option label="label2" value="value2" disabled />
            <Select.Option label="label3" value="value3" />
            <Select.Option label="label4" value="value4" disabled />
          </Select>
          <InputAddon>选择器</InputAddon>
        </InputGroup>
      </div>
    </section>
  )
}
```

:::

## Attributes

### Select

| 参数         | 说明           | 类型                                        | 可选值              | 默认值 |
| ------------ | -------------- | ------------------------------------------- | ------------------- | ------ |
| className    | 容器 className | string                                      | -                   | -      |
| style        | 指定样式       | object                                      | -                   | -      |
| showSearch   | 图标名称       | string                                      | -                   | -      |
| size         | 选择器大小     | string                                      | large,middle, small | -      |
| defaultValue | 默认选中值     | {value: string, label: 'string' }           | -                   | -      |
| onChange     | 回调函数       | ({value: string, label: 'string' }) => void | -                   | -      |

### Select.Option

| 参数      | 说明           | 类型    | 可选值 | 默认值 |
| --------- | -------------- | ------- | ------ | ------ |
| className | 容器 className | string  | -      | -      |
| style     | 指定样式       | object  | -      | -      |
| label     | label          | string  | -      | -      |
| value     | value          | string  | -      | -      |
| disabled  | 禁用选项       | boolean | -      | false  |

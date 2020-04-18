# Input 输入框

原生 input 标签改造，在原生 api 基础上添加样式和扩展。

## 基本用法

:::demo 使用`<Input />`标签声明组件，通过`size`属性设置大小。

```jsx
const App = () => {
  return (
    <div>
      <Input style={styles.item} size="large" placeholder="大号输入框" />
      <Input style={styles.item} size="middle" placeholder="中号输入框" />
      <Input style={styles.item} size="small" placeholder="小号输入框" />
    </div>
  )
}

const styles = {
  item: {
    margin: '10px 0',
  },
}
```

:::

## 自动获取焦点

完美支持 ref 引用

:::demo 使用`<Input />`标签声明组件，通过`focus`方法获取焦点

```jsx
const App = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.focus()
  })

  return <Input ref={ref} placeholder="自动获取焦点" />
}
```

:::

## 状态提示

:::demo 使用`<Input />`标签声明组件，通过`vaild`属性设置状态，支持成功/失败态，值类型为 boolean 或 string

```jsx
const App = () => {
  return (
    <div>
      <Input style={styles.item} vaild="false" />
      <Input style={styles.item} vaild={true} />
    </div>
  )
}

const styles = {
  item: {
    margin: '10px 0',
  },
}
```

:::

## 使用 label

:::demo 使用`InputGroup`标签声明包裹组件，使用`<Input />`标签声明组件。

```jsx
const App = () => {
  return (
    <div>
      <InputGroup>
        <label htmlFor="name1">label</label>
        <Input id="name1" />
      </InputGroup>
      <InputGroup row={false} style={styles.item}>
        <label htmlFor="name2">label</label>
        <Input id="name2" />
      </InputGroup>
    </div>
  )
}

const styles = {
  item: {
    margin: '10px 0',
  },
}
```

:::

## 使用插件

:::demo 使用`InputGroup`标签声明包裹组件，使用`<Input />`标签声明组件，使用`InputAddon`标签声明插件。

```jsx
const App = () => {
  return (
    <div>
      <div style={styles.wrapper}>
        <InputGroup style={styles.item}>
          <InputAddon>Addon</InputAddon>
          <Input type="text" size="large" placeholder="默认样式" />
        </InputGroup>
        <InputGroup style={styles.item}>
          <InputAddon>Addon</InputAddon>
          <Input type="text" size="middle" placeholder="默认样式" />
        </InputGroup>
        <InputGroup style={styles.item}>
          <InputAddon>Addon</InputAddon>
          <Input type="text" size="small" placeholder="默认样式" />
        </InputGroup>
      </div>

      <InputGroup style={styles.item}>
        <Input type="text" placeholder="按钮插件" />
        <InputAddon>
          <Button type="primary">
            <Icon name="arrow-right" />
          </Button>
        </InputAddon>
      </InputGroup>

      <InputGroup style={styles.item}>
        <Input type="text" placeholder="这里是智能的，是ReactElement清除默认样式" />
        <InputAddon>
          <div style={styles.addon}>1</div>
        </InputAddon>
      </InputGroup>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
  },
  item: {
    margin: '10px',
  },
  addon: {
    width: '100px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f2f2f2',
  },
}
```

:::

## Attributes

| 参数      | 说明           | 类型              | 可选值               | 默认值 |
| --------- | -------------- | ----------------- | -------------------- | ------ |
| className | 容器 className | string            | -                    | -      |
| style     | 指定样式       | object            | -                    | -      |
| size      | 大小           | string            | large, middle, small | middle |
| disabled  | 禁用状态       | boolean           | -                    | false  |
| vaild     | 状态           | string 或 boolean | -                    | ''     |

### InputGroup API

| 参数 | 说明           | 类型    | 可选值 | 默认值 |
| ---- | -------------- | ------- | ------ | ------ |
| row  | 是否行内 label | boolean | -      | true   |

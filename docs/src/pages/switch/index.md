# Switch 开关

## 基本用法

:::demo 使用`<Switch />`标签声明组件，通过`checked`属性设置开关的状态，`onClick`属性设置状态改变函数

```jsx
const App = () => {
  const [checked, setChecked] = React.useState(false)
  return <Switch checked={checked} onClick={() => setChecked(!checked)}></Switch>
}
```

:::

## 自定义内容和大小

可以自定义开关状态显示的内容和开关的大小

:::demo 使用`<Switch />`标签声明组件，通过`size`属性设置开关的大小，`checkedChildren`属性设置开关打开时的内容，`unCheckedChildren`属性设置开关关闭时显示的内容

```jsx
const App = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div style={styles.wrapper}>
      <div>
        <Switch checked={checked} onClick={() => setChecked(!checked)} size="small" />
      </div>
      <div>
        <Switch checked={checked} onClick={() => setChecked(!checked)} />
      </div>
      <div>
        <Switch
          checked={checked}
          onClick={() => setChecked(!checked)}
          checkedChildren={<Icon name="close" />}
          unCheckedChildren={<Icon name="eyes" style={{ color: 'black' }} />}
        />
      </div>
      <div>
        <Switch
          checked={checked}
          onClick={() => setChecked(!checked)}
          size="small"
          checkedChildren="开"
          unCheckedChildren="关"></Switch>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}
```

:::

## 加载和禁用状态

:::demo 使用`<Switch />`标签声明组件，通过`loading`属性设置加载状态，`disabled`属性设置禁用

```jsx
const App = () => {
  const [statusWithLoading, setStatusWithLoading] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onClick = () => {
    setLoading(true)
    setTimeout(() => {
      setStatusWithLoading(!statusWithLoading)
      setLoading(false)
    }, 500)
  }
  return (
    <div>
      <Switch checked={false} disabled={true}></Switch>
      <Switch
        style={styles.item}
        onClick={onClick}
        checked={statusWithLoading}
        loading={loading}></Switch>
    </div>
  )
}

const styles = {
  item: {
    marginLeft: '20px',
  },
}
```

:::

## Attributes

| 参数              | 说明           | 类型            | 可选值 | 默认值 |
| ----------------- | -------------- | --------------- | ------ | ------ |
| className         | 容器 className | string          | —      | —      |
| style             | 指定样式       | object          | —      | —      |
| checked           | 开关状态       | boolean         | -      | false  |
| checkedChildren   | 开启状态内容   | React.ReactNode | -      | -      |
| unCheckedChildren | 关闭状态内容   | React.ReactNode | -      | -      |
| size              | 开关大小       | string          | -      | -      |
| loading           | 加载状态       | boolean         | -      | false  |
| disabled          | svg 字符串     | boolean         | -      | false  |
| onClick           | 点击函数       | () => any       | -      | -      |

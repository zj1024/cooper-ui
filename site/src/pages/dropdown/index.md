# Dropdown 下拉菜单

弹出一个列表

## 基本用法

:::demo 使用`<Dropdown />`标签声明组件，通过`name`属性设置对应的 icon

```jsx
const App = () => {
  const overlay = (
    <Dropdown.Menu>
      <Dropdown.Item style={styles.item}>下拉选项一</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项二</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项三</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项四</Dropdown.Item>
    </Dropdown.Menu>
  )

  return (
    <Dropdown overlay={overlay}>
      <Button type="primary">下拉菜单</Button>
    </Dropdown>
  )
}

const styles = {
  item: {
    fontSize: '13px',
  },
}
```

:::

## 不同位置

:::demo 使用`<Dropdown />`标签声明组件，通过`placement`属性设置位置

```jsx
const App = () => {
  const overlay = (
    <Dropdown.Menu>
      <Dropdown.Item style={styles.item}>下拉选项一</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项二</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项三</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项四 较长文本</Dropdown.Item>
    </Dropdown.Menu>
  )

  return (
    <div>
      <div style={styles.wrapper}>
        <Dropdown overlay={overlay} placement="bottom-left">
          <Button type="primary">top-left</Button>
        </Dropdown>
        <Dropdown overlay={overlay} placement="top-center">
          <Button type="primary">top-center</Button>
        </Dropdown>
        <Dropdown overlay={overlay} placement="top-right">
          <Button type="primary">top-right</Button>
        </Dropdown>
      </div>

      <div style={styles.wrapper}>
        <Dropdown overlay={overlay} placement="top-left">
          <Button type="primary">bottom-left</Button>
        </Dropdown>
        <Dropdown overlay={overlay} placement="bottom-center">
          <Button type="primary">bottom-center</Button>
        </Dropdown>
        <Dropdown overlay={overlay} placement="bottom-right">
          <Button type="primary">bottom-right</Button>
        </Dropdown>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    width: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  item: {
    fontSize: '13px',
  },
}
```

:::

## 触发方式

左边是功能按钮，右边是触发下拉菜单的按钮

:::demo 使用`<Dropdown />`标签声明组件，通过`splitButton`属性设置下拉框的按钮，按钮的属性同`<Button />`组件一致，注意此时不需要在`<Dropdown>`组件里单独使用`<Button>`组件。

```jsx
const App = () => {
  const overlay = (
    <Dropdown.Menu>
      <Dropdown.Item style={styles.item}>下拉选项一</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项二</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项三</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项四 较长文本</Dropdown.Item>
    </Dropdown.Menu>
  )

  return (
    <div style={styles.wrapper}>
      <Dropdown overlay={overlay}>
        <Button type="primary">hover</Button>
      </Dropdown>
      <Dropdown overlay={overlay} trigger="click">
        <Button type="primary">click</Button>
      </Dropdown>
    </div>
  )
}

const styles = {
  wrapper: {
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: '13px',
  },
}
```

:::

## 带下拉框的按钮

左边是功能按钮，右边是触发下拉菜单的按钮

:::demo 使用`<Dropdown />`标签声明组件，通过`splitButton`属性设置下拉框的按钮，按钮的属性同`<Button />`组件一致，注意此时不需要在`<Dropdown>`组件里单独使用`<Button>`组件。

```jsx
const App = () => {
  const overlay = (
    <Dropdown.Menu>
      <Dropdown.Item style={styles.item}>下拉选项一</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项二</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项三</Dropdown.Item>
      <Dropdown.Item style={styles.item}>下拉选项四 较长文本</Dropdown.Item>
    </Dropdown.Menu>
  )

  return (
    <Dropdown overlay={overlay} splitButton={true}>
      下拉菜单
    </Dropdown>
  )
}

const styles = {
  item: {
    fontSize: '13px',
  },
}
```

:::

## Attributes

| 参数        | 说明           | 类型               | 可选值                                                               | 默认值 |
| ----------- | -------------- | ------------------ | -------------------------------------------------------------------- | ------ |
| className   | 容器 className | string             | -                                                                    | -      |
| style       | 指定样式       | object             | -                                                                    | -      |
| overlay     | 下拉框内容     | React.ReactElement | -                                                                    | -      |
| placement   | 位置           | string             | top-left,top-center,top-right,bottom-left,bottom-center,bottom-right | -      |
| trigger     | 触发方式       | string             | hover, click                                                         | hover  |
| splitButton | 下拉框按钮     | boolean            | -                                                                    | false  |
| splitButton | 下拉框按钮     | boolean            | -                                                                    | false  |

- `splitButton = true`时，`Dropdown`新增的接收参数同`Button`组件一样

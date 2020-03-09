# Button 按钮

常用按钮，用户操作交互组件

基于`button`标签，通过 css 属性`padding`来控制大小

## 基本用法

实心按钮表示高度的强调, 根据颜色来区分不同逻辑。

:::demo 使用`<Button />`标签声明组件，通过`type`属性设置对应的颜色

```jsx
const App = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button type="primary" style={styles.btn}>
        按钮
      </Button>
      <Button type="warning" style={styles.btn}>
        按钮
      </Button>
      <Button type="success" style={styles.btn}>
        按钮
      </Button>
      <Button type="danger" style={styles.btn}>
        按钮
      </Button>
      <Button type="info" style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
}
```

:::

## 圆形按钮

:::demo 使用`<Button />`标签声明组件，设置`circle`属性为 true

```jsx
const App = () => {
  const buttonContent = <Icon style={styles.icon} name="close" />
  return (
    <div>
      <Button circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
      <Button type="primary" circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
      <Button type="warning" circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
      <Button type="success" circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
      <Button type="danger" circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
      <Button type="info" circle={true} style={styles.btn}>
        {buttonContent}
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 缕空按钮

中强调按钮。它们包含重要的操作，但不是应用程序中的主要操作

:::demo 使用`<Button />`标签声明组件，设置`plain`属性为 true

```jsx
const App = () => {
  return (
    <div>
      <Button plain={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="primary" plain={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="warning" plain={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="success" plain={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="danger" plain={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="info" plain={true} style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 圆角按钮

:::demo 使用`<Button />`标签声明组件，设置`round`属性为 true

```jsx
const App = () => {
  return (
    <div>
      <Button round={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="primary" round={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="warning" round={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="success" round={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="danger" round={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="info" round={true} style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 取消阴影

:::demo 使用`<Button />`标签声明组件，设置`shadow`属性为 false

```jsx
const App = () => {
  return (
    <div>
      <Button shadow={false} style={styles.btn}>
        按钮
      </Button>
      <Button type="primary" shadow={false} style={styles.btn}>
        按钮
      </Button>
      <Button type="warning" shadow={false} style={styles.btn}>
        按钮
      </Button>
      <Button type="success" shadow={false} style={styles.btn}>
        按钮
      </Button>
      <Button type="danger" shadow={false} style={styles.btn}>
        按钮
      </Button>
      <Button type="info" shadow={false} style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 加载中状态

:::demo 使用`<Button />`标签声明组件，通过`loading`属性控制加载状态，可以结合`disabled`使用（第一个按钮）

```jsx
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div>
      <Button
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}
        disabled={isLoading}>
        按钮
      </Button>
      <Button
        type="primary"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}>
        按钮
      </Button>
      <Button
        type="warning"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}>
        按钮
      </Button>
      <Button
        type="success"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}>
        按钮
      </Button>
      <Button
        type="danger"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}>
        按钮
      </Button>
      <Button
        type="info"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 禁用状态

:::demo 使用`<Button />`标签声明组件，设置`disabled`属性为 true

```jsx
const App = () => {
  return (
    <div>
      <Button disabled={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="primary" disabled={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="warning" disabled={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="success" disabled={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="danger" disabled={true} style={styles.btn}>
        按钮
      </Button>
      <Button type="info" disabled={true} style={styles.btn}>
        按钮
      </Button>
    </div>
  )
}

const styles = {
  btn: {
    marginLeft: '10px',
    marginBottom: '5px',
  },
  icon: {
    width: '16px',
    height: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
}
```

:::

## 按钮组

:::demo 使用`<ButtonGroup />`标签声明按钮组

```jsx
const App = () => {
  return (
    <div>
      <ButtonGroup>
        <Button type="primary">按钮</Button>
        <Button type="primary">
          <Icon name="arrow-right" />
        </Button>
      </ButtonGroup>

      <ButtonGroup style={{ marginTop: '20px' }}>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
        <Button type="primary">按钮</Button>
      </ButtonGroup>

      <div>
        <ButtonGroup vertical={true} style={{ marginTop: '20px' }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                                           | 默认值  |
| --------- | -------------- | ------- | ------------------------------------------------ | ------- |
| className | 容器 className | string  | —                                                | —       |
| style     | 指定样式       | object  | —                                                | —       |
| type      | 按钮类型       | string  | default, primary, success, warning, danger, info | default |
| plain     | 缕空样式       | boolean | —                                                | false   |
| round     | 圆角按钮       | boolean | —                                                | false   |
| circle    | 圆形按钮       | boolean | —                                                | false   |
| loading   | 加载中状态     | boolean | —                                                | false   |
| disabled  | 禁用状态       | boolean | —                                                | false   |
| shadow    | 阴影           | boolean | —                                                | true    |

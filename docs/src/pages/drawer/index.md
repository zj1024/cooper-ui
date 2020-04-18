# Drawer 抽屉

从屏幕边缘打开的侧边栏，包含了补充的内容。

## 基本用法

默认从左侧打开，请注意！`Drawer`组件必须要传递`onCancel`属性，功能为关闭 visible，所以你也可以在关闭时做一些逻辑操作，比如弹框确认是否关闭。

:::demo 使用`<Drawer />`标签声明组件，通过`children`设置抽屉内容，`visible`属性控制显示/隐藏，`onCancel`属性控制关闭

```jsx
const App = () => {
  const [visible, setVisible] = React.useState(false)

  // Drawer内的展示内容，无需关注
  const content = (
    <div>
      {[0, 1].map((d, i) => (
        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {
            return (
              <div key={`${item}-${index}`} style={styles.item}>
                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />
                <span>{item}</span>
              </div>
            )
          })}
        </section>
      ))}
    </div>
  )

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        open
      </Button>
      <Drawer visible={visible} onCancel={() => setVisible(false)}>
        {content}
      </Drawer>
    </div>
  )
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    padding: '20px',
  },
}
```

:::

## 自定义位置

支持上右下左四个方向打开。

:::demo 使用`<Drawer />`标签声明组件，`direction`属性自定义方向，可选值：`left`，`right`，`top`，`bottom`

```jsx
const App = () => {
  {
    /* 核心逻辑 */
  }
  const [visible, setVisible] = React.useState(false)

  // 这部分属于非核心逻辑，无需关注
  const [direction, setDirection] = React.useState('left')
  const radioOptions = [
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' },
  ]
  const handleRadioChange = e => {
    setDirection(e.target.value)
  }
  // Drawer内的展示内容，无需关注
  const content = (
    <div>
      {[0, 1].map((d, i) => (
        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {
            return (
              <div key={`${item}-${index}`} style={styles.item}>
                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />
                <span>{item}</span>
              </div>
            )
          })}
        </section>
      ))}
    </div>
  )
  // 上面属于非核心逻辑，无需关注

  return (
    <div style={styles.wrapper}>
      <Radio options={radioOptions} onChange={handleRadioChange} defaultValue="left" />
      <Button style={styles.ml20} type="primary" onClick={() => setVisible(true)}>
        open
      </Button>

      {/* 核心逻辑 */}
      <Drawer visible={visible} direction={direction} onCancel={() => setVisible(false)}>
        {content}
      </Drawer>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
  },
  ml20: {
    marginLeft: '20px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    padding: '20px',
  },
}
```

:::

## 自定义蒙层、内容背景颜色

可以取消蒙层，修改内容背景颜色用来淡化 UI 效果

:::demo 使用`<Drawer />`标签声明组件，通过`mask`控制蒙层展示，`maskClosable`蒙层是否可点击关闭。通过`contentBackground`修改内容的背景色。

```jsx
const App = () => {
  const [visible, setVisible] = React.useState(false)

  // Drawer内的展示内容，无需关注
  const content = (
    <div>
      {[0, 1].map((d, i) => (
        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {
            return (
              <div key={`${item}-${index}`} style={styles.item}>
                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />
                <span>{item}</span>
              </div>
            )
          })}
        </section>
      ))}
      <Button style={{ margin: '10px' }} round type="danger" onClick={() => setVisible(false)}>
        关闭
      </Button>
    </div>
  )

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        黑色背景，蒙层点击不可关闭
      </Button>
      <Drawer
        visible={visible}
        onCancel={() => setVisible(false)}
        maskClosable={false}
        contentBackground="#000">
        {content}
      </Drawer>
    </div>
  )
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    padding: '20px',
  },
}
```

:::

## 嵌套 Drawer

遇到一些复杂人机交互，则可以嵌套 Drawer 操作。

:::demo 使用`<Drawer />`标签声明组件，`zIndex`属性控制 Drawer 的层级，默认为 1001。嵌套越深，层级数值要越大。如果在 DOM 的结构上按照下面写，层级越深的 Drawer，DOM 越在下，则无需设置 zIndex

```jsx
const App = () => {
  const [visible, setVisible] = React.useState(false)
  const [insideVisible, setInsideVisible] = React.useState(false)

  // Drawer内的展示内容，无需关注
  const content = (
    <div>
      {[0, 1].map((d, i) => (
        <section key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
          {['success Navbar', 'warning Drawer', 'info Alimail'].map((item, index) => {
            return (
              <div key={`${item}-${index}`} style={styles.item}>
                <Icon style={{ marginRight: '5px' }} name={item.split(' ')[0]} />
                <span>{item}</span>
              </div>
            )
          })}
        </section>
      ))}

      <Button
        style={{ margin: '10px' }}
        round
        type="success"
        onClick={() => setInsideVisible(true)}>
        Open Inside Drawer
      </Button>
    </div>
  )

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        嵌套两层的Drawer
      </Button>
      <Drawer visible={visible} onCancel={() => setVisible(false)}>
        {content}
      </Drawer>
      <Drawer visible={insideVisible} onCancel={() => setInsideVisible(false)}>
        Wow! inside Drawer.
      </Drawer>
    </div>
  )
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    padding: '20px',
  },
}
```

:::

## Attributes

| 参数              | 说明              | 类型            | 可选值                      | 默认值 |
| ----------------- | ----------------- | --------------- | --------------------------- | ------ |
| className         | 容器 className    | string          | -                           | -      |
| style             | 指定样式          | object          | -                           | -      |
| children          | 内容              | React.ReactNode | -                           | -      |
| visible           | Drawer 是否可见   | boolean         | -                           | false  |
| onCancel          | 关闭 Drawer，必填 | () => any       | -                           | -      |
| mask              | 是否含有蒙层      | boolean         | -                           | true   |
| maskClosable      | 点击蒙层是否关闭  | boolean         | -                           | true   |
| destroyOnClose    | 关闭销毁 DOM      | boolean         | -                           | false  |
| direction         | 打开的位置        | string          | left， right， top， bottom | left   |
| contentBackground | 内容背景色        | string          | -                           | #fff   |
| zIndex            | Drawer 层级       | number          | -                           | 1001   |

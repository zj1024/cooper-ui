# Dialog 对话框

传递 message 给用户，包含了一些关键信息，需要用户进行确认。

## 基础用法

对话框中包含头部、message 区域、底部，可以通过点击蒙层、头部关闭按钮、底部关闭按钮关闭

:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 将 visible 为 false 的函数，`onOk`上传递函数接收`done`回调函数

```jsx
const App = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开Dialog
      </Button>
      <Dialog visible={visible} onCancel={() => setVisible(false)} onOk={done => done()}>
        <p>文本信息</p>
      </Dialog>
    </div>
  )
}
```

:::

## 自定义属性

在基础用法的基础上，支持自定义 dialog 的`宽度`，`头部`，`尾部`，`尾部确认按钮文案`，`尾部取消按钮文案`，`显示隐藏动画`，`蒙层`

:::demo 使用`<Dialog />`标签声明组件，自定义属性在下方`Attributes`具体查看。

```jsx
const App = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开Dialog
      </Button>
      <Dialog
        wdith="500px"
        header={<div>通知</div>}
        footer={
          <div style={styles.footer}>
            <Icon name="info" /> 这是一条尾部通知
          </div>
        }
        closable={false}
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={done => done()}>
        <p>文本信息</p>
      </Dialog>
    </div>
  )
}

const styles = {
  footer: {
    width: '100%',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
```

:::

## Dialog API

通过函数方式调用 Dialog，接受的 options 如下所示：

也可以从下方`Attributes`的`Dialog.Alert...`查看详细说明

```tsx
interface DialogFuncProps {
  title?: React.ReactNode
  message: React.ReactNode
  width?: string
  okText?: string
  cancelText?: string
  onOk: (done) => any
  onCancel?: () => any
}
```

### Dialog.Alert

通过函数方式触发，默认蒙层点击不关闭，取消显示头部按钮 以及 尾部取消按钮

:::demo `Dialog.Alert(option)`方法触发，

```jsx
const App = () => {
  const openDialog = () => {
    Dialog.Alert({
      message: 'test',
      width: '300px',
      onCancel: () => {
        console.log('Dialog.Alert onCancel called')
      },
      onOk: (done: any) => {
        console.log('Dialog.Alert onOk called')
        done()
      },
    })
  }

  return (
    <div>
      <Button type="primary" onClick={openDialog}>
        函数调用 Alert
      </Button>
    </div>
  )
}
```

:::

### Dialog.Confirm

通过函数方式触发，默认蒙层点击不关闭，取消显示头部按钮

:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 visible 为 false 的函数，`onOk`上传递函数接收`done回调函数`

```jsx
const App = () => {
  const openDialog = () => {
    Dialog.Confirm({
      message: '确认删除吗？',
      width: '400px',
      onCancel: () => {
        console.log('Dialog.Confirm onCancel called')
      },
      onOk: (done: any) => {
        console.log('Dialog.Confirm onOk called')
        done()
      },
    })
  }

  return (
    <div>
      <Button type="primary" onClick={openDialog}>
        函数调用 Confirm
      </Button>
    </div>
  )
}
```

:::

### Dialog.Modal

通过函数方式触发，同基础方式一样

:::demo 使用`<Dialog />`标签声明组件，通过`visible`属性设置隐藏与显示。需要指定`onCancel`属性和`onOk`属性。`onCancel`上传递设置 visible 为 false 的函数，`onOk`上传递函数接收`done回调函数`

```jsx
const App = () => {
  const openDialog = () => {
    Dialog.Modal({
      width: '350px',
      message: '宽度设置了350px',
      okText: '是的',
      cancelText: '不是的',
      onCancel: () => {
        console.log('Dialog.Modal onCancel called')
      },
      onOk: (done: any) => {
        console.log('Dialog.Modal onOk called')
        done()
      },
    })
  }

  return (
    <div>
      <Button type="primary" onClick={openDialog}>
        函数调用 Modal
      </Button>
    </div>
  )
}
```

:::

## Attributes

### Dialog

| 参数         | 说明             | 类型            | 可选值 | 默认值                                 |
| ------------ | ---------------- | --------------- | ------ | -------------------------------------- |
| className    | 容器 className   | string          | —      | —                                      |
| style        | 指定样式         | object          | —      | —                                      |
| visible      | 对话框是否可见   | boolean         | -      | -                                      |
| width        | 宽度             | string          | -      | 700px, 屏幕宽度小于 768px 按照 90%显示 |
| header       | 自定义头部       | React.ReactNode | -      | -                                      |
| footer       | 自定义尾部       | React.ReactNode | -      | -                                      |
| okText       | 确认按钮文字     | string          | -      | 确认                                   |
| cancelText   | 取消按钮文字     | string          | -      | 取消                                   |
| cancelable   | 展示尾部取消按钮 | boolean         | -      | true                                   |
| closable     | 头部关闭按钮     | boolean         | -      | true                                   |
| animat       | 显示隐藏动画     | boolean         | -      | true                                   |
| mask         | 蒙层             | boolean         | -      | true                                   |
| maskClosable | 点击蒙层关闭     | boolean         | -      | true                                   |
| lockScroll   | 背景不可滚动     | boolean         | -      | true                                   |
| onOk         | 确认按钮点击回调 | (done) => any   | -      | -                                      |
| onCancel     | 取消按钮点击回调 | () => any       | -      | -                                      |

### Dialog.Alert、Dialog.Confirm、Dialog.Modal

| 参数       | 说明             | 类型            | 可选值 | 默认值                                 |
| ---------- | ---------------- | --------------- | ------ | -------------------------------------- |
| title      | 自定义头部       | React.ReactNode | -      | -                                      |
| message    | 自定义信息       | React.ReactNode | -      | -                                      |
| width      | 宽度             | string          | -      | 700px, 屏幕宽度小于 768px 按照 90%显示 |
| okText     | 确认按钮文字     | string          | -      | 确认                                   |
| cancelText | 取消按钮文字     | string          | -      | 取消                                   |
| onOk       | 确认按钮点击回调 | (done) => any   | -      | -                                      |
| onCancel   | 取消按钮点击回调 | () => any       | -      | -                                      |

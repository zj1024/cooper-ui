# Message 消息提示

全局展示操作反馈信息，包括成功、失败、警告等类型信息。顶部或底部居中显示，是一种不打断用户操作的轻量级提示方式。

该组件为 Function API 用法。

## 基础用法

Message 函数直接调用，通过参数配置。

:::demo 通过 Function API`Message`函数调用。

```jsx
const App = () => {
  return (
    <div>
      <Button
        style={styles.item}
        type="primary"
        onClick={() => {
          Message({
            message: '消息提示',
          })
        }}>
        默认Message
      </Button>

      <Button
        style={styles.item}
        type="primary"
        onClick={() => {
          Message({
            message: '消息提示',
            placement: 'bottom',
          })
        }}>
        底部展示
      </Button>

      <Button
        style={styles.item}
        type="success"
        onClick={() => {
          Message({
            message: '消息提示',
            type: 'success',
          })
        }}>
        底部展示
      </Button>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '15px',
  },
}
```

:::

## 常驻展示与可取消

消息可以停留在页面上直到用户点击取消

:::demo 通过 Function API`Message`函数调用。`duration`参数配置为 0 则为常驻，从用户体验角度，请设置`showClose`为 true 让用户可关闭

```jsx
const App = () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          Message({
            message: '消息提示',
            duration: 0,
            showClose: true,
          })
        }}>
        常驻可关闭
      </Button>
    </div>
  )
}
```

:::

## Message API

通过函数方式调用 Message， 提供了`success`、`info`、`error`、`warning`接口。

### API 调用

:::demo `Message[type](options)`方法触发，其中 type 为上述接口。

```jsx
const App = () => {
  return (
    <div>
      <Button
        style={styles.item}
        type="info"
        onClick={() => {
          Message.info({ message: '消息提示' })
        }}>
        info
      </Button>

      <Button
        style={styles.item}
        type="success"
        onClick={() => {
          Message.success({ message: '消息提示' })
        }}>
        success
      </Button>

      <Button
        style={styles.item}
        type="warning"
        onClick={() => {
          Message.warning({ message: '消息提示' })
        }}>
        warning
      </Button>

      <Button
        style={styles.item}
        type="danger"
        onClick={() => {
          Message.error({ message: '消息提示' })
        }}>
        error
      </Button>
    </div>
  )
}

const styles = {
  item: {
    marginRight: '15px',
  },
}
```

:::

## Options

### Message

| 参数      | 说明             | 类型            | 可选值                        | 默认值 |
| --------- | ---------------- | --------------- | ----------------------------- | ------ |
| className | 容器 className   | string          | -                             | -      |
| style     | 指定样式         | object          | -                             | -      |
| type      | 组件主题         | string          | success，info，error，warning | info   |
| message   | 信息内容         | React.ReactNode | -                             | -      |
| showClose | 显示可关闭按钮   | boolean         | -                             | false  |
| placement | 组件位置         | string          | top，bottom                   | top    |
| duration  | 显示多少时间关闭 | number          | -                             | 3000   |

### Message API

| 参数      | 说明             | 类型            | 可选值      | 默认值 |
| --------- | ---------------- | --------------- | ----------- | ------ |
| className | 容器 className   | string          | -           | -      |
| style     | 指定样式         | object          | -           | -      |
| message   | 信息内容         | React.ReactNode | -           | -      |
| showClose | 显示可关闭按钮   | boolean         | -           | false  |
| placement | 组件位置         | string          | top，bottom | top    |
| duration  | 显示多少时间关闭 | number          | -           | 3000   |

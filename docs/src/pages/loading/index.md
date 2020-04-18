# Loading 加载

加载数据时给用户反馈。

## 基本用法

提供两种加载类型，light 和 dark 类型

:::demo 使用`<Loading />`标签声明组件，通过`type`属性设置对应的类型

```jsx
const App = () => {
  return (
    <div style={styles.wrapper}>
      <Loading visible={true}>
        <div style={styles.box}>数据加载中......</div>
      </Loading>
      <Loading visible={true} type="dark">
        <div style={styles.box}>数据加载中......</div>
      </Loading>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  },
  box: {
    width: '200px',
    height: '200px',
    boxShadow: '0 5px 15px 0 rgba(27, 27, 78, 0.1)',
  },
}
```

:::

## 自定义文本和 icon 的颜色

支持在 icon 下显示加载文案，支持自定义 icon 的颜色

:::demo 使用`<Loading />`标签声明组件，通过`text`属性设置加载文案，通过`color`属性设置 icon 颜色

```jsx
const App = () => {
  return (
    <div style={styles.wrapper}>
      <Loading visible={true} type="light" text="加载中..." color="pink">
        <div style={styles.box}>数据加载中......</div>
      </Loading>
      <Loading visible={true} type="dark" text="数据正在努力赶来" color="orange">
        <div style={styles.box}>数据加载中......</div>
      </Loading>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  },
  box: {
    width: '300px',
    height: '200px',
    boxShadow: '0 5px 15px 0 rgba(27, 27, 78, 0.1)',
  },
}
```

:::

## Attributes

| 参数      | 说明                 | 类型    | 可选值          | 默认值 |
| --------- | -------------------- | ------- | --------------- | ------ |
| className | 容器 className       | string  | -               | -      |
| style     | 指定样式             | object  | -               | -      |
| visible   | 显示或隐藏           | boolean | -               | false  |
| type      | 加载类型             | string  | light, dark     | light  |
| color     | 加载中 icon 颜色     | string  | -               | -      |
| text      | 加载 icon 下面的文案 | string  | React.ReactNode | light  |
